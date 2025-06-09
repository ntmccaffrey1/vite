import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className="backButton" aria-label="Go back to previous page" onClick={() => navigate(-1)}>👈 Back</button>
        </>
    )
}

export default BackButton;
