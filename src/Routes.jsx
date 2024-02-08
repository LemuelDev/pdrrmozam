import {Route, Routes} from "react-router-dom"
import Homepage from "./sections/Homepage"
import Services from "./sections/Services";
import About from "./sections/About";
import Support from "./sections/Support";
import Profiles from "./sections/Profiles";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} exact/>
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/risk-profiles" element={<Profiles/>} />
        </Routes>    
    )
}


export default AppRoutes;