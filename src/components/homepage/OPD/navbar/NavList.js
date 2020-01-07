import React from 'react';
import NavSearch from './NavSearch'
import Notification from './Notification'
import UserProfile from './UserProfile'
const NavList = () => {
  return (
    <ul className="navbar-nav ml-auto">
    
    <li className="nav-item">
        <a className='nav-link'>
    <NavSearch/>
    </a>
    </li>
    <li className="nav-item dropdown">
        <Notification />
         </li>
    
         <li class="dropdown user user-menu">
             <UserProfile/>
          </li>

  </ul>
  );
}

export default NavList;
