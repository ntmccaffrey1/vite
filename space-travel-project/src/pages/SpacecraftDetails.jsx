import { useParams } from "react-router-dom";
import { fetchSpacecrafts } from "../utils/fetchSpacecrafts";
import { useEffect, useState } from "react";
import { slugify } from "../components/SpacecraftCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "./SpacecraftDetails.css";
import "../components/Error.css";

const SpacecraftDetails = () => {
    const { slug } = useParams();
    const [spacecraft, setSpacecraft] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const all = await fetchSpacecrafts();
            const matchedSpacecraft = all.find(spacecraft => slugify(spacecraft.name) === slug);
            if (!matchedSpacecraft) {
                setError("🚨 Spacecraft not found.")
            } else {
                setSpacecraft(matchedSpacecraft);
            }
        } catch (error) {
            console.error("🚨 Error fetching spacecrafts:", error);
            setError("🚨 Failed to load spacecraft data.");
        } finally {
            setLoading(false);
        }
    };    

    useEffect(() => {
        fetchData();
    }, [slug])

    if (loading) return <div className="loading-overlay"><Loading /></div>;
    if (error) return <div className="error error-overlay"><Error message={error} /></div>;
    if (!spacecraft) return null;

    return (
        <div className="SpacecraftDetails">
            <div className="SpacecraftDetails__img">
                {spacecraft.pictureUrl ? (
                    <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                ) : (
                    <span>🚀</span>
                )}
            </div>
            <div className="SpacecraftDetails__content">
                <div className="SpacecraftDetails__content--details">
                    <h3>Name: {spacecraft.name}</h3>
                    <p>Capacity: {spacecraft.capacity}</p>
                </div>
                <div className="SpacecraftDetails__content--desc">
                    <span>Description:</span>
                    <p>{spacecraft.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SpacecraftDetails;