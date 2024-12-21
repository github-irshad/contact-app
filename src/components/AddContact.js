import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  addContact = (event) => {
    event.preventDefault();    
    if(this.name === "" && this.email === ""){

        alert("mandatory");
        return;
    }
    this.props.addContactHandler(this.state);
    // console.log(this.state);
    this.setState({name: "",
        email: "",});
    
};
  render() {
    

    return (
      <div className="ui main">
        {/* <div></div> */}
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.addContact}>
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
          <button className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
