import { useState } from "react";
import axios from "axios";

function AddEmployee() {

    const [employee, setEmployee] = useState({
        email: '',
        username: '',
        password: ''
    });

    const addEmployee = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/AddEmployee', employee)
            .then(res => {
                if (res.data.success) {
                    document.getElementById('email').value = '';
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    const handleInput = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h2>Add Employee</h2>
            <form onSubmit={addEmployee}>
                <input type="text" name='email' id='email' onChange={handleInput}
                       placeholder='Enter Employee Email...' required='true' className='m-4 p-2'/>
                <input type="text" name='username' id='username' onChange={handleInput}
                       placeholder='Create Username...' required='true' className='m-4 p-2'/>
                <input type="text" name='password' id='password' onChange={handleInput}
                       placeholder='Create Password...' required='true' className='m-4 p-2'/>
                <button type='submit' className='m-4 p-2'>Add</button>
            </form>

        </>
    );
}

export default AddEmployee;