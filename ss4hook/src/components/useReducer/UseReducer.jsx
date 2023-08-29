import { useReducer, useState } from "react";
//  userState
// + khai bao gia tri khoi tao
// + bat su kien tang giam xu li

//  UseReducer
// + khai bao gia tri khoi tao
// + bat su kien tang giam xu li
// + tao Reducer de xu li logic
// + truyen dispatch


// b1: khai bao gia tri khoi tao
const inittialValue = 0;
// b2: tao cac hanh dong
const UP_ACTION = "up"
const DOWN_ACTION = "down"

function UseReducer() {
    //  b3: tao ham Reducer
    /**
     * ham reducer
     * @param {*} state    state hien tai
     * @param {*} action   hanh dong
     */
    const reducer = (state, action) => {
        console.log('action', action);
        switch (action) {
            case UP_ACTION:
                return state + 1

            case DOWN_ACTION:
                return state - 1

            default:
                return state
        }
    }

    // b4 goi ra useReducer
    const [count, dispatch] = useReducer(reducer, inittialValue);

    // const [count, setCount] = useState(0)
    // const handleIncrease = () => {
    //     setCount(count + 1)
    // }
    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }

    return (
        <>
            <h3>count: {count}</h3>
            {/* <button onClick={handleIncrease}>tang</button>
            <button onClick={handleDecrease}>giam</button> */}

            <button onClick={() => dispatch(UP_ACTION)}>tang</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>giam</button>
        </>
    );
}

export default UseReducer;