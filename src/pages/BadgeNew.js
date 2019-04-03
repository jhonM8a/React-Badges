import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';


class BadgeNew extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="header"/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge 
                            firstName="Jhon" 
                            lastName="Ochoa" 
                            jobTitle="Engenieer" 
                            twitter="@jochoa"
                            avatar="https://es.gravatar.com/avatar?d=identicon"  
                        />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 export default BadgeNew;
