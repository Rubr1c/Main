import { useState, useEffect } from "react";

const api = 'https://v6.exchangerate-api.com/v6/48a6d755baceeaae38c3cf91/latest/USD';

function Converter() {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [exchangeRates, setExchangeRates] = useState([]);
    const [userInput, setUserInput] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setCurrencyOptions([...Object.keys(data.conversion_rates)]);
                setExchangeRates([...Object.values(data.conversion_rates)]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    function updateValue(e) {
        setUserInput(e.target.value);
    }

    function setCurrency(e) {
        setFromCurrency(e.target.value);
    }

    function updateToCurrency(e) {
        setToCurrency(e.target.value);
    }

    function handleOutput() {
        if (fromCurrency === 'USD') {
            const index = currencyOptions.indexOf(toCurrency)
            setConvertedAmount(userInput * exchangeRates[index])
        } else if (toCurrency === 'USD') {
            const index = currencyOptions.indexOf(fromCurrency)
            setConvertedAmount(userInput / exchangeRates[index])
        } else {
            const fromIndex = currencyOptions.indexOf(fromCurrency)
            const toIndex = currencyOptions.indexOf(toCurrency)
            setConvertedAmount(userInput * exchangeRates[toIndex] / exchangeRates[fromIndex])
        }
    }



    return (
        <div>
            <h1>Currency Converter</h1>

            <select onChange={setCurrency}>
                {currencyOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <input type='number' value={userInput} onChange={updateValue} />
            <br/>
            <h2>to</h2>
            <select onChange={updateToCurrency}>
                {currencyOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <input value={convertedAmount} readOnly />
            <br/>
            <button onClick={handleOutput}>Convert</button>
        </div>
    );
}

export default Converter;
