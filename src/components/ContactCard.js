import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" alt="user" src={user} />
      <div className="content">
        <Link to={`/contact/${id}`} state={props.contact}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => {
          props.deleteContactHandler(id);
        }}
      ></i>
      <Link to={`/edit/${id}`} state={props.contact}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};
