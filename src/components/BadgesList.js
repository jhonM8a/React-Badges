import React from "react";
import "./styles/Badge.css";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setfilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setfilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No Badges find :(</h3>
        <Link className="btn btn-primary" to="badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
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
    </div>
  );
}
export default BadgesList;
