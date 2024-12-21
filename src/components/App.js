import './App.css';
import { ContactList } from './ContactList';
import  AddContact  from './AddContact';
import Header  from "./Header";

function App() {
  const contacts = [
    {
      id : '1',
      'name': 'John',
      'email': 'johna@example.com'
    },
    {
      id : '2',
      'name': 'Mary',
      'email': 'mary@example.com'
    },
    {
      id : '3',
      'name': 'Esther',
      'email': 'esther@example.com'
    }
  ];
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
