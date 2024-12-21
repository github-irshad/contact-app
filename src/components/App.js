import './App.css';
import { ContactList } from './ContactList';
import  AddContact  from './AddContact';
import Header  from "./Header";
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts,contact]);
    // console.log(contact);
    
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
