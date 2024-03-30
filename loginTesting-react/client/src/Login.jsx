import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Validation from "./LoginValidation.js";
import axios from "axios";

function Login() {
     const [values, setValues] = useState({
        email: '',
        password: ''
     });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if(res.data.valid) {
                    navigate('/');
                } else {
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }, []);

     const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validation(values));
         if(errors.email === '' && errors.password === '') {
             axios.post('http://localhost:8081/Login', values)
                 .then(res => {
                     if (res.data.Login) {
                         navigate('/');
                     } else {
                         alert('no existing accounts')
                     }
                 })
                 .catch(err => console.log(err));
         }
     }
        const handleInput = (e) => {
            setValues(v => ({
                    ...v,
                    [e.target.name]: e.target.value
                })
            )
        }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Login</h2>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email...' name='email'
                               onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password...'  name='password'
                               onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <Link to='/signup'
                          className='btn btn-default border w-100 mt-3 bg-light text-decoration-none'>SignUp</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;