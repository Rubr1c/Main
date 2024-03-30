import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
