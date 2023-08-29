import { useRef, useState } from "react";
// import UserState_Comp from "../useState/UserState_Comp";

function BaiTap3() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStart(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    let seconds = 0;
    if (start !== null && now !== null) {
        seconds = (now - start) / 1000;
    }

    return (
        <div>
            <h4>Đếm thời gian : {seconds.toFixed(3)}</h4>
            <button className="btn btn-primary m-3" onClick={handleStart}>Bắt đầu</button>
            <button className="btn btn-warning" onClick={handleStop}>Dừng</button>
        </div>
    )
}

export default BaiTap3;