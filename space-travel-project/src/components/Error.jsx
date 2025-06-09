import BackButton from "./BackButton";

const Error = ({ message }) => {
    return (
        <div className="Error">
            <div className="Error__container">
                <p>{ message }</p>
                <BackButton />
            </div>
        </div>
    )
}

export default Error;
