import "./App.css";
import { ContactList } from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Routes, Route, useNavigate } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contact.js";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = async (contact) => {

    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post('/contacts',request)
    
    setContacts([...contacts, response.data]);
    // console.log(contact);
  };
   const getAllContacts = async () =>{
    const response =  await api.get("contacts")
    return response.data;
   }
  const LOCAL_STORAGE_KEY = "contact";

  useEffect(() => {
    // const retrivedContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    const getContacts = async () =>{
      const retrivedContacts = await getAllContacts()
      if (retrivedContacts) setContacts(retrivedContacts);
    }

    getContacts();
    
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const navigate = useNavigate();

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
          path="/"
          element={
            <ContactList
              contacts={contacts}
              removeContactHandler={deleteContactHandler}
            />
          }
        ></Route>
        <Route path="/contact/:id" element={<ContactDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
