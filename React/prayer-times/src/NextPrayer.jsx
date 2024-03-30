import { useState, useContext, useRef, useEffect } from "react";
import { TimeContext } from "./CurrentTime.jsx";
import { prayerTimesContext } from "./PrayerTimes.jsx";

function NextPrayer() {
    const time = useContext(TimeContext);
    const prayerTimes = useContext(prayerTimesContext);

    const nextPrayerTimeRef = useRef('Fajr');
    const [nextPrayerTime, setNextPrayerTime] = useState('');

    useEffect(() => {
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const convertedPrayerTimes = Object.values(prayerTimes).map(time => {
            const [hours, minutes, seconds] = time.split(':');
            const currPrayerTime = new Date();
            currPrayerTime.setHours(parseInt(hours, 10));
            currPrayerTime.setMinutes(parseInt(minutes, 10));
            currPrayerTime.setSeconds(parseInt(seconds || 0, 10)); // Handle case where seconds may not be provided
            return currPrayerTime;
        });

        let nextPrayerIndex = -1;
        for (const [index, date] of convertedPrayerTimes.entries()) {
            if (date > currentTime) {
                nextPrayerIndex = index;
                break;
            }
        }

        if (nextPrayerIndex === -1) {
            // If there is no upcoming prayer time in the current day, set the next prayer to Fajr of the next day
            nextPrayerTimeRef.current = 'Fajr';
            const nextDay = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000); // Next day
            const fajrTime = convertedPrayerTimes[0]; // Assuming Fajr is the first prayer time in the array
            fajrTime.setDate(nextDay.getDate());
            fajrTime.setMonth(nextDay.getMonth());
            fajrTime.setFullYear(nextDay.getFullYear());
            const timeDifference = fajrTime.getTime() - currentTime.getTime();
            const secondsLeft = Math.floor((timeDifference / 1000) % 60);
            const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const formattedTimeLeft = `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:${minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
            setNextPrayerTime(formattedTimeLeft);
        } else {
            nextPrayerTimeRef.current = Object.keys(prayerTimes)[nextPrayerIndex];
            const timeDifference = convertedPrayerTimes[nextPrayerIndex].getTime() - currentTime.getTime();
            const secondsLeft = Math.floor((timeDifference / 1000) % 60);
            const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const formattedTimeLeft = `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:${minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
            setNextPrayerTime(formattedTimeLeft);
        }
    }, 10);

    return () => clearInterval(intervalId);
}, [time, prayerTimes]);

    return (
        <div className='next-prayer-container'>
            <h2>Next Prayer: {nextPrayerTimeRef.current}</h2>
            <p>{nextPrayerTime}</p>
        </div>
    );
}

export default NextPrayer;
