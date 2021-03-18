import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header_content">
        <div>
          {props.isAuth ? props.login + ' ' + props.email:
            <NavLink to={'/login'}>Login</NavLink>
            
          }
          {props.isAuth && <button onClick = {props.exit}>Exit</button>}
        </div>



      </div>
    </div>
  )
}
export default Header;