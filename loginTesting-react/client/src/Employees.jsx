import { useEffect, useState } from "react";
import axios from "axios";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    });

    const fetchEmployees = () => {
        axios
            .get("http://localhost:8081/GetEmployees")
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleDeleteEmployee = async (email) => {
        try {
            await axios
                .delete(`http://localhost:8081/DeleteEmployee`, {
                    params: {
                        email: email,
                    },
                })
                .then((res) => {
                    if (res.data.success) {
                        setEmployees(employees.filter((employee) => employee.email !== email));
                    }
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    const openEditWindow = (employee) => {
        document.getElementById("editEmail").value = employee.email;
        document.getElementById("editUsername").value = employee.username;
        document.getElementById("editPassword").value = employee.password;
        document.getElementById("employeeEmail").innerText = employee.email;
        document.getElementById("edit-emp-window").style.display = "block";
    };

    const closeEditWindow = () => {
        document.getElementById("edit-emp-window").style.display = "none";
    };

    const saveChanges = () => {
        const email = document.getElementById("employeeEmail").innerText;
        const editUsername = document.getElementById("editUsername").value;
        const editPassword = document.getElementById("editPassword").value;

        const updatedEmployee = {
            email: email,
            username: editUsername,
            password: editPassword,
        };

        axios
            .post("http://localhost:8081/EditEmployee", updatedEmployee)
            .then((res) => {
                if (res.data.success) {
                    closeEditWindow();
                } else {
                    console.error("Error editing employee:", res.data.error);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2>Employees</h2>
            {employees.map((employee) => (
                <div key={employee.email} className="d-flex">
                    <h5 className="m-5">{employee.email}</h5>
                    <h5 className="m-5">{employee.username}</h5>
                    <h5 className="m-5">{employee.password}</h5>
                    <button className="m-5 btn btn-primary" onClick={() => openEditWindow(employee)}>
                        Edit
                    </button>
                    <button className="m-5 btn btn-danger" onClick={() => handleDeleteEmployee(employee.email)}>
                        Delete
                    </button>
                </div>
            ))}
            <div id="edit-emp-window">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="">Edit Employee</h1>
                    <button
                        id="close-button"
                        onClick={closeEditWindow}
                        className="text-danger bg-transparent border-0 fs-3 p-0"
                    >
                        ✘
                    </button>
                </div>
                <input
                    type="text"
                    className="m-3"
                    id="editEmail"
                    name="Email"
                    
                />
                <input
                    type="text"
                    className="m-3"
                    id="editUsername"
                    name="Username"
                />
                <input
                    type="password"
                    className="m-3"
                    id="editPassword"
                    name="Password"
                />
                <br />
                <button className="m-3 btn btn-success" onClick={saveChanges}>
                    Save
                </button>
                <p className="d-none" id="employeeEmail"></p>
            </div>
        </>
    );
}

export default Employees;