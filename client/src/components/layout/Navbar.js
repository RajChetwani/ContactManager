import React, { Fragment,useContext } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated,logout,user} =authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li className="nav-item">
            <div className="nav-link" style={{cursor:'pointer'}}>Hello {user && user.name}</div>
            </li>
            <li>
                <a className="nav-link" href="/login" onClick={onLogout} style={{cursor:'pointer'}}>
                <i className="fa fa-sign-out"></i><span className="hidde-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
             <li className="nav-item">
                <Link to="/login" className="nav-link"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link"><i className="fa fa-user-plus" aria-hidden="true"></i> Register</Link>
            </li>
        </Fragment>
    )
        return (
           <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0 bg-primary" style={{ height : '58px'}}>
               <div className="container">
                   <Link to="/" className="navbar-brand"><i className="fa fa-address-book" aria-hidden="true"></i> Contact Keeper</Link>
                   <div>
                       <ul className="navbar-nav mr-auto">
                            {
                                isAuthenticated ? authLinks : guestLinks
                            }

                           <li className="nav-item">
                               <Link to="/about" className="nav-link"><i className="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                           </li>
                          
                       </ul>
                   </div>
               </div>
           </nav>
        )
    
}

export default Navbar