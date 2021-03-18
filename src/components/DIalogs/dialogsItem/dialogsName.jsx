import React from 'react';
import { NavLink } from 'react-router-dom';
import './../dialogs.css';


const Dialogsname = (props) =>{
    return(
        <div className="dialog">
                    <NavLink to = {"/dialogs/" + props.id}>{props.name} </NavLink>
                    
                </div>
                
    )
}
export default Dialogsname ;