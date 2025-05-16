import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import "./MissionControl.css";

const MissionControl = ({ initialMissions }) => {

    const [filter, setFilter] = useState("All");
    const [missions, setMissions] = useState(initialMissions);

    const updateStatus = (id, newStatus) => {
        setMissions((prevMissions) =>
            prevMissions.map((mission) => 
                mission.id === id ? { ...mission, status: newStatus } : mission
            )
        );
    };

    return (
        <>
            <h1>Space Mission Control</h1>
            <MissionFilter setFilter={setFilter} />

            {missions
                .filter((mission) => filter === "All" || mission.status === filter)
                .map((mission) => (
                <div key={mission.id} className="MissionControl-container">
                    <MissionCard key={mission.id} name={mission.name} status={mission.status} crew={mission.crew} />
                    <MissionAction id={mission.id} onUpdateStatus={updateStatus} />
                </div>
            ))}
        </>
    );
}

export default MissionControl;