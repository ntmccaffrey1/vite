import { Link } from "react-router-dom";
import DestroyButton from "./DestroyButton";
import "./SpacecraftCard.css";

export const slugify = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const SpacecraftCard = ({ destroySpacecraft, spacecraft }) => {
    return (
        <>
            <div className="Spacecrafts__card">
                <div className="Spacecrafts__card--inner">
                    <div className="Spacecrafts__card--inner-left">
                        <Link to={`/spacecrafts/${slugify(spacecraft.name)}`}>
                            <div className="Spacecrafts__card--inner-img">
                                {spacecraft.pictureUrl ? (
                                    <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                                ) : (
                                    <span>🚀</span>
                                )}
                            </div>
                        </Link>
                        <div className="Spacecrafts__card--inner-content">
                            <h3>Name: {spacecraft.name}</h3>
                            <p>Capacity: {spacecraft.capacity}</p>
                        </div>   
                    </div>
                    <div className="Spacecrafts__card--inner-right">     
                        <DestroyButton 
                            spacecraftId={spacecraft.id} 
                            spacecraftDestroyed={() => destroySpacecraft(spacecraft.id)} 
                        />
                    </div>    
                </div>    
            </div>
        </>     
    )                  
}

export default SpacecraftCard;
