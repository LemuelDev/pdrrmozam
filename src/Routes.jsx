import {Route, Routes} from "react-router-dom"
import Homepage from "./sections/Homepage"
import Events from "./sections/Events";
import Weather from "./sections/Weather";
import Announcements from "./sections/Announcements";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/weather" element={<Weather/>} />
            <Route path="/team" element={<Announcements/>} />
        </Routes>    
    )
}


export default AppRoutes;