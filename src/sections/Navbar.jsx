import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import GovLogo from '../assets/pddrmo_prof.jpg'
import { useState } from "react";

const Navbar = () => {

  const [isClick, setIsClick] = useState(false)

  return (
    <header>
        <div className="content" >
            <div className="logo">
                <Link to="/" className="link-logo">
                <img src={GovLogo} alt="govlogo" width={50} height={50}/>
                <h3>PDRRMO ZAMBALES</h3>
                </Link>
            </div>
            
            <div className="openbar" data-aos="fade-up" data-aos-duration="1000">
                <HiMenu onClick={() => setIsClick(true)} className="icon"/>
            </div>

            <nav className={isClick ? 'show' : 'closebar'}>
                <div className="close">
                  <HiXMark onClick={() => setIsClick(false)} className="icon"/>
                </div>
                <Link to="/services" className="link"  >
                  Services
                </Link>
                <Link to="/about" className="link" >
                  About Us
                </Link>
                <Link to="/support" className="link" >
                  Support
                </Link>
                <Link to="/risk-profiles" className="link"  >
                  Risk Profiles
                </Link>
                
            </nav>
        </div>
    </header>
  )
}

export default Navbar