import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-main">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Web solution
            </NavLink>
            <button className="toggler" type="button">
                <i className="fas fa-bars text-white">

                </i>
            </button>
            <div className="collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="horiselector">
                        <div className="left">

                        </div>
                        <div className="right">

                        </div>
                        </div>
                </ul>

            </div>
        </nav>
            )
}

            export default Navbar