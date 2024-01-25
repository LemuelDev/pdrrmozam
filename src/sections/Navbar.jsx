import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import GovLogo from '../assets/govph-logo.png'
import { useState } from "react";

const Navbar = () => {

  const [isClick, setIsClick] = useState(false)

  return (
    <header>
        <div className="content">
            <div className="logo">
                <img src={GovLogo} alt="govlogo" width={50} height={50}/>
                <h3>GOVPH</h3>
            </div>
            
            <div className="openbar">
                <HiMenu onClick={() => setIsClick(true)} className="icon"/>
            </div>

            <nav className={isClick ? 'show' : 'closebar'}>
                <div className="close">
                  <HiXMark onClick={() => setIsClick(false)} className="icon"/>
                </div>
                <Link to="/" className="link">
                  Home
                </Link>
                <Link to="/events" className="link">
                  Events
                </Link>
                <Link to="/weather" className="link">
                  Weather
                </Link>
                <Link to="/announcements" className="link">
                  Announcements
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Navbar