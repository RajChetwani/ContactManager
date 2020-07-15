import React from 'react'
import { Contacts } from '../contact/Contacts'
import { ContactForm } from '../contact/ContactForm'

const Home = () => {
    return (
        <div className="row">
           <div className="col-md-6">
               <Contacts />
           </div>
           <div className="col-md-6">
               <ContactForm />
           </div>
        </div>
    )
}

export default Home