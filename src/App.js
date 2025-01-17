import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./Home"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
function App(){
    return <>
    <Header/>
    <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Service" element={<Service/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </>
}

export default App ;