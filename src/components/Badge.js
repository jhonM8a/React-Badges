import React from 'react';
import ConfLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){   
        return(
            <div>
                <div>
                    <img src={ConfLogo} alt="Logo"/>
                </div>

                <div>
                    <img src="https://es.gravatar.com/avatar?d=identicon" alt ="Aavatar"/>
                    <h1>Jhon</h1>
                </div>

                <div>
                    <p>Ingenier fullstack</p>
                    <p>@jochoa</p>
                </div>

                <div>
                    #ConConf
                </div>
            </div>
        )
    }
}

export default Badge;