import SpaceTravelApi from "../services/SpaceTravelApi";

const DestroyButton = ({ spacecraftDestroyed }) => {
    return (
        <div className="DestroyButton">
            <button onClick={spacecraftDestroyed}>💥 Destroy</button>
        </div>
    )
}

export default DestroyButton;
