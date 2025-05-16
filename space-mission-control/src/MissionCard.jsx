const MissionCard = ({ name, status, crew }) => {
    return (
        <div className="MissionCard">
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <p>Crew: {crew.join(", ")}</p>
        </div>
    );
}

export default MissionCard;