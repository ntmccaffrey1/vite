import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import CardsList from "./CardsList";
import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

function getRandom(min = -45, max = 45) {
    return Math.random() * (max - min) + min;
}

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [deckId, setDeckId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [cardsDrawing, setCardsDrawing] = useState(false);

    const intervalRef = useRef(null);
    const abortControllerRef = useRef(null);

    const initializeDeck = async () => {
        setIsLoading(true);

        try {
            const deckResponse = await axios.get(`${BASE_URL}/new/shuffle/`);
            setDeckId(deckResponse.data.deck_id);
        } catch (e) {
            console.log("Error setting up deck", e);
        } finally {
            setIsLoading(false);
        }   
    };

    useEffect(() => {
        initializeDeck();
    }, []); 

    const drawCard = () => {
        if (cardsDrawing) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            setCardsDrawing(false);
        } else {
            
            if (!deckId) return;

            intervalRef.current = setInterval(async () => {
                abortControllerRef.current = new AbortController();

                try {
                    const cardRes = await axios.get(`${BASE_URL}/${deckId}/draw/`, {
                        signal: abortControllerRef.current.signal
                    });

                    setCards(prevCards => [...prevCards, { ...cardRes.data.cards[0], rotate: getRandom()}]);
                    setCount(prevCount => {
                        if (prevCount < 52) {
                            return prevCount + 1;
                        } else {
                            return prevCount;
                        }
                    });    

                    if (cardRes.data.remaining === 0) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setCardsDrawing(false);

                        setTimeout(() => {
                            alert("Error: no cards remaining!");
                        }, 100);
                    }

                } catch (e) {
                    if (axios.isCancel(e)) {
                        console.log("Request cancelled");
                    } else {
                        console.log("Error drawing card.");
                        setError(e);
                        clearInterval(intervalRef.current);
                    }    
                } 

            }, 500)   
            setCardsDrawing(true);  
        }   
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const shuffleDeck = () => {
        setCards([]);
        setCount(0);
        setCardsDrawing(false);
        initializeDeck();
    }

    return (
        <div>
            <h1>Draw a Card</h1>
            <Buttons drawCard={drawCard} shuffleDeck={shuffleDeck} drawDisabled={count >= 52} cardsDrawing={cardsDrawing} />
            <p>Card Count: {count} of 52</p>
            <CardsList cards={cards} />
            <p>{isLoading ? 'Shuffling deck...' : ''}</p>
            <p>{error ? "Something went wrong." : ""}</p>
        </div>
    )
}

export default Cards;