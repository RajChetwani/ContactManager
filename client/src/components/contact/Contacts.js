import React, { useContext,useEffect, Fragment } from 'react'
import ContactContext from '../../context/contact/contactContext'
//import ContactState from '../../context/contact/ContactState';
import { ContactItem } from './ContactItem';
import {CSSTransition,TransitionGroup } from 'react-transition-group'
import './ContactStyle.css'
import Spinner from '../layout/Spinner'
export const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts,filtered,getContacts,loading } = contactContext;

    useEffect(()=>{
        getContacts();
        //eslint-disable-next-line
    },[])

    if(contacts !== null && contacts.length === 0 && !loading){
        return <h4 style={{marginTop:'10px'}}>Please Add a Contact</h4>
    }
    return (
       <Fragment>
        {contacts !== null && !loading ? (
        <div>
            <TransitionGroup>
                { filtered !== null ? filtered.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                    <ContactItem  contact={contact} />
                    </CSSTransition>
                )):contacts.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                    <ContactItem contact={contact} />
                    </CSSTransition>
                ))}
            </TransitionGroup> 
        </div>
        ) : <Spinner /> }
        </Fragment>     
    )
}
