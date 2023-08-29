import { useState } from "react";

function ThucHanh1() {
    const [count, setCount] = useState(0)
    const handleTang = () => {
        setCount(count + 1)
    }
    return (
        <>
            <span>count: {count}</span>
            <button onClick={handleTang}>tang</button>
        </>
    );
}

export default ThucHanh1;