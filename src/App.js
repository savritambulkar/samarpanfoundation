import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./Home"
import RegisterCom from "./components/RegisterCom";
import RegisterNgo from "./components/RegisterNgo";
import RegisterVol from "./components/RegisterVol";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import './index.css';
import Login from "./components/Login";
import CompanyList from "./components/CompanyList";
import NgoList from "./components/NgoList";
import CompanyDetail from "./components/CompanyDetail";
function App(){
    return <>
    <Header/>
    <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="comDetail/:_id" element={<CompanyDetail/>}></Route>
        <Route path="Collaborations" element={<Service/>}></Route>
        <Route path="RegisterCom" element={<RegisterCom/>}></Route>
        <Route path="RegisterVol" element={<RegisterVol/>}></Route>
        <Route path="RegisterNgo" element={<RegisterNgo/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="RegisterCom" element={<RegisterCom/>}></Route>
        <Route path="RegisterNgo" element={<RegisterNgo/>}></Route>
        <Route path="RegisterVol" element={<RegisterVol/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="CompanyList" element={<CompanyList/>}></Route>
        <Route path="NgoList" element={<NgoList/>}></Route>
    </Routes>
    <Footer/>
    </>
}

export default App ;