import React from 'react';
import "./Header.css"
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';


import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user ,logOut}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
               {user.email && <span style={{color:'white'}}>hello {user.displayName}</span>}
                {
                    user?.email?
                
                <NavLink onClick={logOut} to="/login">Log Out</NavLink>
                :
                <NavLink  to="/login">Log in</NavLink>
                }
            </nav>
            
        </div>
    );
};

export default Header;