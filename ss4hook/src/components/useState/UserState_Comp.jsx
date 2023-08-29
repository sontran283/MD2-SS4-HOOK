import { useState } from "react";

const total = [100, 200, 300, 400]

function UserState_Comp() {
    //  pham vi viet code js
    const [count, setCount] = useState(() => {
        console.log('inittialState');
        //  doi voi inittialState la mot callback thi no se lay gia tri duoc return tu call back la inittialState
        const totalCount = total.reduce((preValue, curr) => {
            return preValue + curr
        }, 0)
        return totalCount
    })
    console.log('re-render');

    // ham xu li tang
    const handleCount = () => {
        //  cap nhat lai gia tri cua state
        setCount(count + 1)
        // setCount((prevState) => prevState + 1)   
    }

    return (
        <>
            <div>state: {count}</div>
            <button onClick={handleCount}>Count</button>
        </>

    );
}

export default UserState_Comp;