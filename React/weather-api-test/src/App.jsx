import {useState, useEffect} from "react";

const URL = "http://api.weatherapi.com/v1/current.json?key=539fb355178941d3a44230335242903&q=Cairo&aqi=no"

function App() {

    const [temp, setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(data => {
                setTemp(data.current.temp_c);
                }
            )
        }
        fetchData();
    }, [])

  return (
    <div>
        Temperature: {temp}
    </div>
  )
}

export default App
