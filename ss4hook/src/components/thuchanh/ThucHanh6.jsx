import { useState } from "react";

function ThucHanh6() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ name, email, phone });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>name:</label>
                    <input type='text' value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>email:</label>
                    <input type='email' value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>phone:</label>
                    <input type='tel' value={phone} onChange={handlePhoneChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default ThucHanh6;