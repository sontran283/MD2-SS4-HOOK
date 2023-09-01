import { useEffect, useRef, useState } from "react";

function Test() {
    const inputRef = useRef()
    // const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        inputRef.current.focus()
    }, [password])
    
    return (
        <>
            <form action="">
                <label htmlFor="" >email</label>
                <input
                    type="text"
                    ref={inputRef}
                />
                <label htmlFor="">password</label>
                <input
                    type="text"
                    ref={inputRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </form>
        </>
    );
}

export default Test;