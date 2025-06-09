import "./Loading.css";

const Loading = () => {
    return (
        <div className="Loading">
            <div className="Loading__container">
                <p>Loading</p>
                <span className="Loading__container--dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </div>
        </div>
    )
}

export default Loading;