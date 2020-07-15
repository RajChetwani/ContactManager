import React from 'react'
import ContactContext from '../../context/contact/contactContext'
import { useContext } from 'react';

export const ContactItem = ({contact}) => {
    const { id,name,email,phone,type } = contact;
    const contactContext = useContext(ContactContext);
    const { deleteContact,setCurrent } = contactContext;

    const onDelete = () =>{
        deleteContact(id);
    }
    return (
        <div style={{marginTop:'30px'}}>
            <div className="card" style={{ marginBottom:'20px'}}>
                <div className="card-header text-primary">
                    {name} {''} <span style={{float:'right'}} className={'badge ' + (type === 'professional'?'badge-success':'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </div>
                <div className="card-body">
                    <ul className="list-group" style={{listStyleType:'none',marginBottom:'20px'}}>
                        { email  && (<li><i className="fa fa-envelope"></i> {email}</li>)}
                        { phone  && (<li style={{marginTop:"5px"}}><i className="fa fa-phone"></i> {phone}</li>)}
                    </ul>
                    <button style={{marginRight:'5px'}} className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}><i className="fa fa-pencil"></i>  Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={onDelete}><i className="fa fa-trash"></i>  Delete</button>
                </div>
            </div>
        </div>
    )
}
