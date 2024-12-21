import React from "react";

class AddContact extends React.Component {
    
  render() {
    const addContact = () => {};
    return (
      <div className='ui main'>
        {/* <div></div> */}
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={addContact}>
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name"/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" />
          </div>
          <button className="ui button blue" type = 'submit'>Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
