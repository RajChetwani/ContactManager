import React, { useContext, useEffect,useRef } from 'react'
import ContactContext from '../../context/contact/contactContext'

export const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');

    useEffect(()=>{
        if(contactContext.filtered === null){
            text.current.value='';
        }
    })
    const onChange = (e) =>{
        if(text.current.value !== ''){
            contactContext.filterContacts(e.target.value);
        }else{
            contactContext.clearFilter();
        }
    }
    return (
        <div style={{marginTop:'30px'}}>
            <form>
                <input style={{width:'540px'}} ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}/>
            </form>
        </div>
    )
}
