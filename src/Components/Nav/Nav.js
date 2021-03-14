import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/AKrFBZ.png";
import AppContext from '../../context.js';
import './Nav.css';

function Nav(props) {

    const state = React.useContext(AppContext);
    let greeting = "Login";

    if(state.isLoggedIn == true) {
        greeting = "Logout";
    }

    return (
 
    <div className="nav-wrapper grid grid-cols-12 flex flex-row h-24">  
        <div className="navbar flex col-span-8 h-full items-center">
            <Link to="/" className="ml-10 w-40"><img src={logo} alt = 'logo'/></Link>
            <Link to="/" className="nav-link ml-16 mr-8">Home</Link>
            <p className="divider">|</p>
            <Link to="/campaigns" className="nav-link ml-8 mr-8">Active Campaigns</Link>
            <p className="divider">|</p>
            <Link to="/calculator" className="nav-link ml-8 mr-8">Rate My Campaign</Link>
        </div>
        <div className="navbar flex  col-span-4 h-full items-center flex-row-reverse">
            <Link to={`/${greeting}`} className="login mr-20">{greeting}</Link>
        </div>
    </div>
    )
}
export default Nav
