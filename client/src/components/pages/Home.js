import React from 'react'
import { Contacts } from '../contact/Contacts'
import { ContactForm } from '../contact/ContactForm'
import { ContactFilter } from '../contact/ContactFilter'

const Home = () => {
    return (
        <div className="row">
           <div className="col-md-6">
               <ContactFilter />    
               <Contacts />
           </div>
           <div className="col-md-6">
               <ContactForm />
           </div>
        </div>
    )
}

export default Home