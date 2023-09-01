import { useReducer, useState } from "react";
//  UseReducer
// + khai bao gia tri khoi tao
// + bat su kien tang giam xu li
// + tao Reducer de xu li logic
// + truyen dispatch


// b1: khai bao gia tri khoi tao
const inittialValue = 0
// b2: tao cac hanh dong
const UP_ACTION = "up"
const DOWM = "down"

function TestUseReducer() {
    //  b3: tao ham Reducer
    const reducer = (state, action) => {
        switch (action) {
            case (UP_ACTION):
                return state + 1
            case (DOWM):
                return state - 1
            default:
                return state
        }
    }
    // b4: goi ra useReducer
    const [count, dispatch] = useReducer(reducer, inittialValue)

    return (
        <>
            <h3>count: {count}</h3>
            <button onClick={() => dispatch(UP_ACTION)}>tang</button>
            <button onClick={() => dispatch(DOWM)}>giam</button>
        </>
    );
}

export default TestUseReducer;