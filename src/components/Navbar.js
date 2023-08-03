import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid bg-dark">
            <div className="logo-container">
                <img src={logo} className="logo-img"></img>
                <span className="navbar-brand text-white logo-text">CurrentPulse</span>
                
                </div>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-10 mb-lg-2">
                        <li>
                            <NavLink className="nav-link nav-item" aria-current="page" to="/current-pulse">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/business">Business</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/entertainment">Entertainment</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/sports">Sports</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/health">Health</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/science">Science</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link nav-item" to="/current-pulse/technology">Technology</NavLink>
                        </li>
                        
                     
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;