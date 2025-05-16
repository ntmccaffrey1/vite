import "./MissionFilter.css";

const MissionFilter = ( { setFilter }) => {
    
    const filters = ["All", "Planned", "Active", "Completed"];

    return (
        <div className="MissionFilter">
            {filters.map((filter) => {
                return (
                    <button 
                        key={filter}
                        className="MissionFilter-button"
                        onClick={() => setFilter(filter) }
                        >
                        <span>{filter}</span>
                    </button>
                );
            })}
        </div>
    );
}

export default MissionFilter;