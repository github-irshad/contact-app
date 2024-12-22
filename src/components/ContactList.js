import React, { useRef } from "react";
import { ContactCard } from "./ContactCard";
import { Link } from "react-router-dom";

export const ContactList = (props) => {
  const inputElement = useRef("");
  const removeContactHandler = (id) => {
    props.removeContactHandler(id);
  };

  const getSearchTerm = () => {
    props.searchHandler(inputElement.current.value);
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
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            ref={inputElement}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderedContactList.length > 0
          ? renderedContactList
          : "No contacts found"}
      </div>
    </div>
  );
};
