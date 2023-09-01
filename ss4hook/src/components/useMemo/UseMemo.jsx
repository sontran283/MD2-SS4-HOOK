import { useMemo, useState } from "react";

function UseMemo() {
    const [count, setCount] = useState(0)

    // thuat toan fibonacy
    const fibonacy = (n) => {
        if (n < 2) {
            return n;
        } else {
            return fibonacy(n - 1) + fibonacy(n - 2)
        }
    }

    console.time("bat dau")  // đo thời gian bắt đàu
    // const result = fibonasy(40)
    const result = useMemo(() => {
        return fibonacy(40)
    }, [])
    console.timeEnd("thoi gian ket thuc")

    return (
        <>
            <h1>count: {count}</h1>
            <h4>result fibonacy: {result}</h4>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

export default UseMemo;