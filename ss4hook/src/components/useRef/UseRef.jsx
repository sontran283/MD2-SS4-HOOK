import { useEffect, useRef } from "react";

function UseRef() {
    const userRef = useRef()

    useEffect(() => {
        userRef.current.focus()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userRef.current.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">userName: </label>
                <input type="text" ref={userRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default UseRef;