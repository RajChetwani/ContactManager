import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
        return (
           <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0 bg-primary" style={{ height : '58px'}}>
               <div className="container">
                   <Link to="/" className="navbar-brand"><i className="fa fa-address-book" aria-hidden="true"></i> Contact Keeper</Link>
                   <div>
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link to="/" className="nav-link"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                           </li>
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