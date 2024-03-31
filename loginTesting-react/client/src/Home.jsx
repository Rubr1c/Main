import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Product from "./Product.jsx";

function Home() {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if(res.data.valid) {
                    setName(res.data.username)
                } else {
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>Welcome {name}</h1>
            <Product/>
        </div>
    );
}



export default Home;