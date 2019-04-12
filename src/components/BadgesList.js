import React from "react";
import "./styles/Badge.css";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <di>
          <h3>No Badges find :(</h3>
          <Link className="btn btn-primary" to="badges/new">
            Create new Badge
          </Link>
        </di>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <div className="Badge-list">
                  <div className="Badge__section-name-list">
                    <img
                      className="Badge__avatar-list"
                      src={badge.avatarUrl}
                      alt="Avatar"
                    />
                    <h1>
                      {badge.firstName} {badge.lastName}
                    </h1>
                  </div>
                  <div className="Badge__section-info-list">
                    <h3>{badge.jobTitle}</h3>
                    <div>@{badge.twitter}</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
