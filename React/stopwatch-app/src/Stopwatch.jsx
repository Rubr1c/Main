import { useState, useEffect, useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - time;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let minutes = Math.floor((time / (1000 * 60) % 60));
        let seconds = Math.floor((time / 1000) % 60);
        let miliseconds = Math.floor((time % 1000) / 10);

        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        miliseconds = String(miliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    return (
     <div className='stopwatch'>
        <div className='display'>{formatTime()}</div>
         <div className='controls'>
             <button onClick={start} className='start-button'> Start</button>
             <button onClick={stop} className='stop-button'> Stop</button>
             <button onClick={reset} className='reset-button'> Reset</button>
         </div>
     </div>
    );
}

export default Stopwatch