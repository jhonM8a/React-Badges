import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from "../api";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: null });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.loading.error} />;
    }
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{this.state.data.firstName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.data.firstName}
                lastName={this.state.data.lastName}
                jobTitle={this.state.data.jobTitle}
                twitter={this.state.data.twitter}
                email={this.state.data.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${this.state.data.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
