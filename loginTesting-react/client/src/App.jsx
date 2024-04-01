import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import AdminHome from "./AdminHome.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeHome from "./EmployeeHome.jsx";

function App() {


  return (
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/home-admin' element={<AdminHome />}/>
            <Route path='/home-employee' element={<EmployeeHome/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
