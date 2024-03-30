import { useState } from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function addCar() {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    function removeCar(index) {
        setCars(c => c.filter((_,i) => i !== index));
    }

    function yearChange(event) {
        setCarYear(event.target.value);
    }

    function makeChange(event) {
        setCarMake(event.target.value);
    }

    function modelChange(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                        <li key={index} onClick={() => removeCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={yearChange}/>
            <br/>
            <input type="text" value={carMake} onChange={makeChange} placeholder="Enter Car Make"/>
            <br/>
            <input type="text" value={carModel} onChange={modelChange} placeholder="Enter Car Model"/>
            <br/>
            <button onClick={addCar}>Add Car</button>
        </div>
    )
}

export default MyComponent;