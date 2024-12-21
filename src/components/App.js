import "./App.css";
import { ContactList } from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    // console.log(contact);
  };

  const LOCAL_STORAGE_KEY = "contact";

  useEffect(() => {
    const retrivedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrivedContacts) setContacts(retrivedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
