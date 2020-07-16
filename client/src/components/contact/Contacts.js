import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactState from '../../context/contact/ContactState';
import { ContactItem } from './ContactItem';
import {CSSTransition,TransitionGroup } from 'react-transition-group'
import './ContactStyle.css'

export const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts,filtered } = contactContext;

    if(contacts.length === 0){
        return <h4>Please Add a Contact</h4>
    }
    return (
        <div>
        <TransitionGroup>
            { filtered !== null ? filtered.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem  contact={contact} />
                </CSSTransition>
            )):contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
                </CSSTransition>
            ))}
        </TransitionGroup> 
        </div>
    )
}
