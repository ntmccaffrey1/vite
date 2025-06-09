import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import "./Planets.css";
import "../components/Error.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PlanetSpacecraft from "../components/PlanetSpacecraft";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [spacecrafts, setSpacecrafts] = useState([]);
    const [activePlanet, setActivePlanet] = useState(null);
    const [activeSpacecraft, setActiveSpacecraft] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const [planetRes, spacecraftRes] = await Promise.all([
                    SpaceTravelApi.getPlanets(),
                    SpaceTravelApi.getSpacecrafts()
                ]);

                setPlanets(planetRes.data);
                setSpacecrafts(spacecraftRes.data);
            } catch (error) {
                console.error("Failed to load data", error);
                setError("🚨 Failed to load data. Please try again.");
            } finally {
                setLoading(false);
            }
        }    

        fetchData();
    }, [])

    const handleClickOnSpacecraft = async (spacecraftId) => {
        if (activePlanet === null) return;

        const selectedSpacecraft = spacecrafts.find(spacecraft => spacecraft.id === spacecraftId);
        const selectedPlanet = planets.find(planet => planet.id === activePlanet);

        if (selectedSpacecraft.currentLocation === activePlanet) {
            alert(`🚨 ${selectedSpacecraft.name} is already stationed on ${selectedPlanet?.name || "this planet"}`);
            return;
        }

        try {
            setActiveSpacecraft(spacecraftId);
            setLoading(true);
            await SpaceTravelApi.sendSpacecraftToPlanet({
                spacecraftId,
                targetPlanetId: activePlanet
            });

            const updatePlanets = await SpaceTravelApi.getPlanets();
            const updateSpacecrafts = await SpaceTravelApi.getSpacecrafts();

            setPlanets(updatePlanets.data);
            setSpacecrafts(updateSpacecrafts.data);
        } catch (error) {
            console.error("🚨 Failed to send spacecraft to planet.", error);
            setError("🚨 Failed to send spacecraft to planet.");
        } finally {
            setActivePlanet(null);
            setActiveSpacecraft(null);
            setLoading(false);
        }
    }   

    if (error) return <div className="error error-overlay"><Error message={error} /></div>;

    return (
        <div className="Planets__wrapper">
            {loading && <div className="loading-overlay"><Loading /></div>}
            <div className="Planets">
                {planets.map((planet) => {
                    const assignedSpacecrafts = spacecrafts.filter(
                        (spacecraft) => spacecraft.currentLocation === planet.id
                    );
                    
                    return (
                        <div key={planet.id} className="Planets__card">
                            <div 
                                className={`Planets__card--inner ${activePlanet === planet.id ? "active" : ""}`}
                                onClick={() => setActivePlanet(planet.id)}
                            >
                                <img src={planet.pictureUrl} alt={planet.name} />
                                <h3>{planet.name}</h3>
                                <p>{planet.currentPopulation}</p>
                            </div> 
                            <div className="Planets__card--spacecraft">
                                {assignedSpacecrafts.map(spacecraft => (
                                    <PlanetSpacecraft key={spacecraft.id} spacecraft={spacecraft} activeSpacecraft={spacecraft.id === activeSpacecraft} onClick={handleClickOnSpacecraft} />
                                ))}   
                            </div>    
                        </div>
                    );
                })}   
            </div>
        </div>
    )
}

export default Planets;
