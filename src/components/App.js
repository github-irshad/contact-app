import "./App.css";
import { ContactList } from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contact.js";
import EditContact from "./EditContact.js";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
    // console.log(contact);
  };
  const getAllContacts = async () => {
    const response = await api.get("contacts");
    return response.data;
  };

  useEffect(() => {
    const getContacts = async () => {
      const retrivedContacts = await getAllContacts();
      if (retrivedContacts) setContacts(retrivedContacts);
    };

    getContacts();
  }, []);

  const deleteContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? response.data : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route
          path="/add"
          element={
            <AddContact
              addContactHandler={addContactHandler}
              navigate={navigate}
            />
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <EditContact
              updateContactHandler={updateContactHandler}
              location={location}
              navigate={navigate}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <ContactList
              contacts={searchTerm.length <1 ?contacts : searchResult}
              removeContactHandler={deleteContactHandler}
              term={searchTerm}
              searchHandler={searchHandler}
            />
          }
        ></Route>
        <Route path="/contact/:id" element={<ContactDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
