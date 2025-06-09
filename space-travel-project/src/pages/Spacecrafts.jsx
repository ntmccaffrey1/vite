import { useEffect, useState } from "react";
import { fetchSpacecrafts } from "../utils/fetchSpacecrafts";
import SpaceTravelApi from "../services/SpaceTravelApi";
import "./Spacecrafts.css";
import "../components/Error.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BuildButton from "../components/BuildButton";
import SpacecraftCard from "../components/SpacecraftCard";

const Spacecrafts = () => {
    const [spacecrafts, setSpacecrafts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAndSetSpacecrafts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchSpacecrafts();
            setSpacecrafts(data);
        } catch (error) {
            setError("🚨 Failed to load spacecrafts.");
            console.error("Failed to load spacecrafts.", error);
        } finally {
            setLoading(false);
        }
    };   

    useEffect(() => {
        fetchAndSetSpacecrafts();
    }, [])

    const destroySpacecraft = async (spacecraftId) => {
        setLoading(true);
        try {
            await SpaceTravelApi.destroySpacecraftById({ id: spacecraftId });
            await fetchAndSetSpacecrafts();
        } catch (error) {
            setError("🚨 Failed to destroy spacecraft.");
            console.error("Failed to destroy spacecraft.", error); 
        } finally {
            setLoading(false);
        }
    }    

    if (error) return <div className="error error-overlay"><Error message={error} /></div>;

    return (
        <div className="Spacecrafts__wrapper">
            {loading && <div className="loading-overlay"><Loading /></div>}
            <div className="Spacecrafts">
                <BuildButton />
                {spacecrafts.map(spacecraft => (
                    <SpacecraftCard key={spacecraft.id} spacecraft={spacecraft} destroySpacecraft={destroySpacecraft} />  
                ))}  
            </div>
        </div>
    )
}

export default Spacecrafts;
