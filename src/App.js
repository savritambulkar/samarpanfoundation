import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./Home"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import RegisterCom from "./components/RegisterCom";
import RegisterVol from "./components/RegisterVol";
import RegisterNgo from "./components/RegisterNgo";
import Login from "./components/Login";
import './index.css';

function App(){
    return <>
    <Header/>
    <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Service" element={<Service/>}></Route>
        <Route path="RegisterCom" element={<RegisterCom/>}></Route>
        <Route path="RegisterVol" element={<RegisterVol/>}></Route>
        <Route path="RegisterNgo" element={<RegisterNgo/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
    </>
}

export default App ;