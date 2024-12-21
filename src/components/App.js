import "./App.css";
import { ContactList } from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
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


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
