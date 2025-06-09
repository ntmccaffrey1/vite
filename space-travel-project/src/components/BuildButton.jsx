import { NavLink } from "react-router-dom";

const BuildButton = () => {
    return (
        <div className="BuildButton">
            <NavLink to="/buildspacecraft">
                <button>🛠️ Build a Spacecraft</button>
            </NavLink>
        </div>
    )
}

export default BuildButton;
