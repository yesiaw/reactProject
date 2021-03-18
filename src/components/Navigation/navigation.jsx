import React from 'react';
import  {NavLink} from "react-router-dom";
import './navigation.css';
const Navigation = () => {
    return(
        <div className = "navigation">
           <div className = "navigation_content">
           <NavLink to = "/profile" className = "nav_active">Profile</NavLink>
           <NavLink to = "/dialogs" className = "nav_active">Messages</NavLink>
           <NavLink to = "">News</NavLink>
           <NavLink to = "">Music</NavLink>
           <NavLink to = "">Settings</NavLink>
           <NavLink to = "/users">Users</NavLink>
           </div>
           
           

         </div>
    )
}
export default Navigation;