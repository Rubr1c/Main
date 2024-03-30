import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import Validation from "./SignUpValidation.js";
import axios from "axios";

function SignUp() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();


    const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if(errors.username === '' && errors.email === '' && errors.password === '') {
            axios.post('http://localhost:8081/SignUp', values)
                .then(res => {
                    navigate('/login');
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


    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Sign Up</h2>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" placeholder='Enter Username...' name='username'
                               onChange={handleInput} className='form-control rounded-0'/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email...' name='email'
                               onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password...' name='password'
                               onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>SignUp</button>
                    <Link to='/login' className='btn btn-default border w-100 mt-3 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;