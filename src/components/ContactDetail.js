import React from "react";
import user from "../images/user.png";
import { Link, useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const location = useLocation();
  const { name, email } = location.state;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img alt="user" src={user} />
        </div>
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
