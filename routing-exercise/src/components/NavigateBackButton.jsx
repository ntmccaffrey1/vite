import { useNavigate } from "react-router-dom";
import "./NavigateBackButton.css";

const NavigateBackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="NavigateBackButton">
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default NavigateBackButton;
