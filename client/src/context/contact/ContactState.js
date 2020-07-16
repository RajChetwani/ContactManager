import React, { useReducer } from 'react';
//import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts:[
            {
                id:1,
                name:'Sam Smith',
                email:'sam@gmail.com',
                phone:'123456789',
                type:'professional'
            },
            {
                id:2,
                name:'Justin Beiber',
                email:'justin@gmail.com',
                phone:'123456789',
                type:'personal'
            },
            {
                id:3,
                name:'Dj Khalid',
                email:'khalid@gmail.com',
                phone:'123456789',
                type:'professional'
            }
        ],
        current : null,
        filtered: null
    }

    const [state,dispatch] = useReducer(contactReducer,initialState);

    //Add Contact
    const addContact = (contact) => {
        contact.id = Math.random();
        dispatch({ type: ADD_CONTACT,payload: contact});
    }

    //Delete COntact
    const deleteContact = (id) => {
        dispatch({type:DELETE_CONTACT,payload:id});
    }

    //Set Current Contact
    const setCurrent = (contact) => {
        dispatch({type:SET_CURRENT ,payload:contact});
    }
    //Clear Current COntact
    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT});
    }
    //Update Contact
    const updateContact = (contact) => {
        dispatch({type:UPDATE_CONTACT ,payload:contact});
    }

    //Filter Contacts
    const filterContacts =(text)=>{
        dispatch({type:FILTER_CONTACTS,payload:text})
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({type:CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            clearFilter,
            filterContacts
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState