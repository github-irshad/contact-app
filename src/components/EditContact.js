import React from "react";

class EditContact extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    const {id,name,email} = props.location.state;
    this.state = {id,name,email};
    
  }
  updateContact = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("mandatory");
      return;
    }

    this.props.updateContactHandler(this.state);
    // console.log(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };
  render() {
    // return (<></>)
    return (
      <div className="ui main">
        {/* <div></div> */}
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.updateContact}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}
export default EditContact;
