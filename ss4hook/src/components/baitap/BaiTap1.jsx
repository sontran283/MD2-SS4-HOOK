import { useState } from "react";

function BaiTap1() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>Số lần click vào nút là: {count}</p>
            <button onClick={increment}>Click</button>
        </>
    );
}

export default BaiTap1;