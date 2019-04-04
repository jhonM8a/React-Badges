import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';


class BadgeNew extends Component{
    state = { form :{
        firstName :'',
        lastName : '',
        email : '',
        jobTitle : '',
        twitter : ''
    } };

    handleChange = e =>{
        this.setState({
            form :{
                ...this.state.form, //Deja caer todo los valores del estado y añade uno nuevo
                [e.target.name]:e.target.value,
            },
        });
    };

    render(){
        return(
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="header"/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName} 
                                jobTitle={this.state.form.jobTitle} 
                                twitter={this.state.form.twitter}
                                avatar="https://es.gravatar.com/avatar?d=identicon"  
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 export default BadgeNew;
