import { useState } from "react";

function BaiTap2() {
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)

    const handleChange = (event) => {
        const checkLengthInput = event.target.value
        setText(checkLengthInput)
        setCount(checkLengthInput.length)
    }

    return (
        <>
            <textarea
                value={text}
                onChange={handleChange}
                cols="60" rows="2"></textarea>
            <h4>Số kí tự trong đoạn văn bản trên là: {count}</h4>
        </>
    );
}

export default BaiTap2;