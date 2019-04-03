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
                    <img className="Badge__avatar" src={this.props.avatar} alt ="Aavatar"/>
                    <h1>{this.props.firstName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.twitter}</div>
                </div>

                <div className= "Badge__footer">
                    #ConConf
                </div>
            </div>
        )
    }
}

export default Badge;