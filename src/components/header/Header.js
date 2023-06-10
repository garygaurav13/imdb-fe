import React from "react";
import Logo from '../../assets/Logo.png';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
        <div className="headerLeft">
            <Link to="/"><img src={Logo}  className="header__icon"></img></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
        </div>
    )
}

export default Header;