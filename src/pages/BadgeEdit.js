import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import api from "../api";

class BadgeEdit extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    },
    loading: true,
    error: null
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, //Deja caer todo los valores del estado y añade uno nuevo
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    console.log("handleSubmit");
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="header"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email"}
                avatar="https://es.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>Edit Person</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeEdit;
