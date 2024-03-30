import { useEffect, useState, createContext } from "react";
import CurrentTime from "./CurrentTime.jsx";

const api = "http://api.aladhan.com/v1/timingsByCity/30-03-2024?city=Cairo&country=Egypt&method=8";

export const prayerTimesContext = createContext();

function PrayerTimes() {

    const [prayerTimes, setPrayerTimes] = useState({});

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const data = await fetch(api);
                const response = await data.json();
                delete response.data.timings.Midnight;
                delete response.data.timings.Imsak;
                delete response.data.timings.Sunset;
                delete response.data.timings.Firstthird;
                delete response.data.timings.Lastthird;
                setPrayerTimes(response.data.timings);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        fetchPrayerTimes();
    }, []);

    function convertTo12HourFormat(time) {
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours, 10);
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${meridiem}`;
    }

    return (
        <div>
            <h1>Prayer Times</h1>
            <ul className='prayer-time-list'>
                {Object.keys(prayerTimes).map((key, index) => {
                    return (
                         <li key={index} id={key} className='prayer-times'>{key}: {convertTo12HourFormat(prayerTimes[key])}</li>
                    )
                })}
</ul>
            <prayerTimesContext.Provider value={prayerTimes}>
                <CurrentTime prayerTimes={prayerTimes}/>
            </prayerTimesContext.Provider>
        </div>
    )
}

export default PrayerTimes;