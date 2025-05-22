import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";
import "./Space.css";

const STAR_SIZE = 50;

const getRandomPos = () => ({
    x: Math.random() * (window.innerWidth - STAR_SIZE),
    y: Math.random() * (window.innerHeight - STAR_SIZE)
});

const Space = () => {
    const [stars, setStars] = useState([]);
    const starRef = useRef(null);
    const prevCountRef = useRef(0);

    const addStar = () => {
        setStars(prev => [...prev, { id: Date.now() + Math.random(), ...getRandomPos() }])
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            addStar();
        }, 2500)

        return () => clearInterval(intervalId);
    }, [])

    const destroyStar = (id) => {
        setStars(prev => prev.filter(star => star.id !== id));
    };

    useEffect(() => {
        if (stars.length > prevCountRef.current && starRef.current) {
            starRef.current.focus();
        }
        prevCountRef.current = stars.length;
    }, [stars]);

    return (
        <div className="Space-container">
            {stars.map((star, index) => (
                <Star key={star.id} x={star.x} y={star.y} ref={stars.length - 1 === index ? starRef : null} destroyStar={() => destroyStar(star.id)} />
            ))}
        </div>
    )
}

export default Space;