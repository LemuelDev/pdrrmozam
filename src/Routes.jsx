import {Route, Routes} from "react-router-dom"
import Homepage from "./sections/Homepage"
import Events from "./sections/Events";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} exact/>
            <Route path="/events" element={<Events/>} />
            {/* <Route path="/weather" element={<Weather/>} />
            <Route path="/team" element={} /> */}
        </Routes>    
    )
}


export default AppRoutes;