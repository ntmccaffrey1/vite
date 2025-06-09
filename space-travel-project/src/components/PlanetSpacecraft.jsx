import "./PlanetSpacecraft.css";

const PlanetSpacecraft = ({ spacecraft, onClick, activeSpacecraft }) => {
  return (
        <>
            <div className="PlanetSpacecraft__card">
                <div className="PlanetSpacecraft__card--inner">
                    <div className={`PlanetSpacecraft__card--inner-img ${activeSpacecraft ? "active" : ""}`}
                        onClick={() => onClick(spacecraft.id)}
                    >
                        {spacecraft.pictureUrl ? (
                            <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                        ) : (
                            <span>🚀</span>
                        )}
                    </div>
                    <div className="PlanetSpacecraft__card--inner-content">
                        <h3>{spacecraft.name}</h3>
                        <p>{spacecraft.capacity}</p>
                    </div>      
                </div>    
            </div>
        </>     
    ) 
}

export default PlanetSpacecraft
