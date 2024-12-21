import React from 'react'
import { ContactCard } from './ContactCard'

export const ContactList = (props) => {
    const renderedContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact = {contact}/>
        )
    })
  return (
    <div className='ui celled list'>
        {renderedContactList}
    </div>
  )
}
