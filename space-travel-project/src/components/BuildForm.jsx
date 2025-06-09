import { useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "./Loading";
import BackButton from "./BackButton";
import "./BuildForm.css"

const BuildForm = () => {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = {}
        if (!name.trim()) formErrors.name = "Name field is required.";
        if (!capacity.trim()) {
            formErrors.capacity = "Capacity field is required.";
        } else if (!/^(\d{1,3}(,\d{3})*|\d+)$/.test(capacity.trim())) {
            formErrors.capacity = "Capacity must be a number (e.g. 1000 || 1,000)."
        }
        if (!description.trim()) formErrors.description = "Description field is required.";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setLoading(true);
            try {
                await SpaceTravelApi.buildSpacecraft({
                    name,
                    capacity: parseInt(capacity.trim().replace(/,/g, ""), 10),
                    description,
                    pictureUrl: pictureUrl.trim() || undefined,
                });

                setName("");
                setCapacity("");
                setDescription("");
                setPictureUrl("");
                setSuccess(true);
            } catch (error) {
                console.error("Error submitting form");
                setErrors({ api: "Error submitting form. Please try again."})
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div className="Buildform">
            <BackButton />
            {loading && <div className="loading-overlay"><Loading /></div> }
            {success ? (
                <div className="success">
                    <p>Your new spacecraft has been built!</p>
                    <button onClick={() => setSuccess(false)}>🛠️ Build Another Spacecraft</button>
                </div>
            ): (    
                <form className="BuildForm" onSubmit={handleSubmit}>
                    <input 
                        id='name'
                        type='text' 
                        name='name' 
                        placeholder='Name' 
                        onChange={e => {
                            setName(e.target.value);
                            errors.name && e.target.value.trim() && setErrors((prev) => ({...prev, name: undefined}));
                        }}
                    />
                    {errors.name ? <p className="error">{errors.name}</p> : ""}
                    <input 
                        id='capacity'
                        type='text' 
                        name='capacity' 
                        placeholder='Capacity' 
                        value={capacity}
                        onChange={e => {
                            setCapacity(e.target.value);
                            errors.capacity && e.target.value.trim() && setErrors((prev) => ({...prev, capacity: undefined}));
                        }}
                    />
                    {errors.capacity ? <p className="error">{errors.capacity}</p> : ""}
                    <textarea
                        id='description'
                        type='text'
                        name='description'
                        placeholder='Description'
                        rows={6}
                        value={description}
                        onChange={e => {
                            setDescription(e.target.value);
                            errors.description && e.target.value.trim() && setErrors((prev) => ({...prev, description: undefined}));
                        }}
                    />
                    {errors.description ? <p className="error">{errors.description}</p> : ""}
                    <input
                        id='picture'
                        type='text'
                        name='picture'
                        placeholder='Picture URL'
                        value={pictureUrl}
                        onChange={e => setPictureUrl(e.target.value)}
                    />
                    <div className="Buildform__submit-button">
                        <button type="submit">Build 🛠️</button>   
                    </div>     
                    <p>{success}</p>
                    {errors.api && <p className="error">{errors.api}</p>}
                </form>
            )}    
        </div>
    )
}

export default BuildForm;
