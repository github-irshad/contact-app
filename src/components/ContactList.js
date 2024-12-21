import React from "react";
import { ContactCard } from "./ContactCard";
import { Link } from "react-router-dom";

export const ContactList = (props) => {
  const removeContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderedContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        deleteContactHandler={removeContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderedContactList}</div>
    </div>
  );
};
