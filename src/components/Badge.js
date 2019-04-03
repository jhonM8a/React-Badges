import React from 'react';
import ConfLogo from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component{
    render(){   
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={ConfLogo} alt="Logo"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://es.gravatar.com/avatar?d=identicon" alt ="Aavatar"/>
                    <h1>Jhon</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Ingenier fullstack</h3>
                    <div>@jochoa</div>
                </div>

                <div className= "Badge__footer">
                    #ConConf
                </div>
            </div>
        )
    }
}

export default Badge;