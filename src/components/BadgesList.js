import React from 'react';
import './styles/Badge.css';

class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                        <li key={badge.id}>
                            <div className="Badge-list">
                                <div className="Badge__section-name-list">
                                    <img className="Badge__avatar-list" src={badge.avatarUrl} alt="Avatar"/>
                                    <h1>{badge.firstName} {badge.lastName}</h1>
                                </div>
                                <div className="Badge__section-info-list">
                                    <h3>{badge.jobTitle}</h3>
                                    <div>@{badge.twitter}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
        </ul>
        )
    }
}
export default BadgesList;