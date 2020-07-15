import React,{useState,useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import { useEffect } from 'react';

export const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, current,clearCurrent,updateContact } = contactContext;

    useEffect( () => {
        if(current !== null){
            setContact(current);
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            })
        }
    },[contactContext,current]);

    const [contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'

    })
    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if( current === null){
            addContact(contact);
        }else{
            updateContact(contact);
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }
    const { name,email,phone,type } = contact;
    return (
        <div className="container" style={{marginTop:'30px'}}>
            <form className="form-group" onSubmit={onSubmit}>
                <h2 style={{textAlign:'center'}}>{current ? 'Edit Contact':'Add Contact'}</h2>
                <input style={{marginTop:'20px',marginBottom:'20px'}} className="form-control" type="text" name="name" value={name} placeholder="Name" onChange={onChange}/>
                <input style={{marginBottom:'20px'}} className="form-control" type="email" name="email" value={email} placeholder="Email" onChange={onChange}/>
                <input style={{marginBottom:'20px'}} className="form-control" type="text" name="phone" value={phone} placeholder="Phone" onChange={onChange}/>
                <h5>Contact Type</h5>
                <input style={{marginBottom:'20px'}} type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange}/>Personal {''}
                <input style={{marginLeft:'10px'}} type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange}/>Professional {''}
                <div  className="form-group">
                    <button type="submit" value="Add Contact" className="btn btn-primary btn-block">{current ? 'Update Contact':'Add Contact'}</button>
                </div>
                <div>
                    { current && (
                        <div>
                            <button onClick={clearAll} className="btn btn-light btn-block">Clear</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}
