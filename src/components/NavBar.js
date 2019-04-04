import React,{ Component } from 'react';
import logo from '../images/logo.svg';
import "./styles/Navbar.css";

class NavBar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Conferencia</span> 
                        <span className="font-weight-bold">Perrona</span>
                    </a>               
                </div>

            </div>
        )
    }
}
 export default NavBar;
