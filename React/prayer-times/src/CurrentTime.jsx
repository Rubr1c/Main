import { useState, useEffect, createContext } from "react";
import NextPrayer from "./NextPrayer.jsx";

export const TimeContext = createContext();

function CurrentTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    return(
        <>
            <h1>Current Time</h1>
            <div className='clock-container'>
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
            <TimeContext.Provider value={time}>
                <NextPrayer time={time}/>
            </TimeContext.Provider>
        </>
    )
}

export default CurrentTime;