import "./MissionAction.css";

const MissionAction = ({ id, onUpdateStatus }) => {

    return (
        <div className="MissionAction">
            <button 
                onClick={() => onUpdateStatus(id, "Active") }
                >
                <span>Launch</span>
            </button>
            <button 
                onClick={() => onUpdateStatus(id, "Completed") }
                >
                <span>Complete</span>
            </button>
        </div>
    );
}

export default MissionAction;