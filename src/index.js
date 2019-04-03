import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badge 
        firstName="Jhon" 
        lastName="Ochoa" 
        jobTitle="Engenieer" 
        twitter="@jochoa"
        avatar="https://es.gravatar.com/avatar?d=identicon"  />, 
    container);
