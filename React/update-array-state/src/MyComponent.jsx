import { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

    const addFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, newFood]);
    }

    const removeFood = (index) => {

        setFoods(f => f.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {
                    foods.map((food, index) =>
                    <li key={index} onClick={() => removeFood(index)}>{food}</li>)
                }
            </ul>
            <input type="text" id = "foodInput" placeholder='enter food name'/>
            <button onClick={addFood}>Add food</button>
        </div>
    )
}

export default MyComponent;