import React from 'react'
import { Contacts } from '../contact/Contacts'
import { ContactForm } from '../contact/ContactForm'
import { ContactFilter } from '../contact/ContactFilter'
import AuthContext from '../../context/auth/authContext'
import { useContext,useEffect } from 'react'

const Home = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
       authContext.loadUser();

       //eslint-disable-next-line
    }, [])
    return (
        <div className="row">
           <div className="col-md-6">
               <ContactForm />
           </div>
           <div className="col-md-6">
               <ContactFilter />    
               <Contacts />
           </div>
        </div>
    )
}

export default Home