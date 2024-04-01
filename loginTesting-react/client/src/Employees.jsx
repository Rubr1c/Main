import { useEffect, useState } from "react";
import axios from "axios";

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/GetEmployees')
            .then(res => {
                setEmployees(res.data);
            })
            .catch(err => console.log(err));
    });

    return(
        <>
            <h2>Employees</h2>
            {employees.map(employee => (
                    <div key={employee.email} className='d-flex'>
                        <h5 className='m-5'>{employee.email}</h5>
                        <h5 className='m-5'>{employee.username}</h5>
                        <h5 className='m-5'>{employee.password}</h5>
                        <button className='m-5'>Edit</button>
                        <button className='m-5'>Delete</button>
                    </div>
                )
            )}
        </>
    )
}

export default Employees;