import React from "react";

class BadgeForm extends React.Component {
  //state = {};
  /*
    handleChange = e =>{
        //console.log({e});
        this.setState({
            [e.target.name]:e.target.value,
        })
    };*/
  handleclick = e => {
    console.log("Button");
  };
  // handleSubmit = e =>{
  //     e.preventDefault(); //Evita que el formulario se envie
  //     console.log(this.props.formValues);

  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} className="">
          <div className="form-group">
            <label>Firts Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleclick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
