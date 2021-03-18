import React from 'react';
import './formsControl.css'

export const HocControls = ({input, meta, nameComponent, ...props }) => {
    let hasEror = meta.touched && meta.error;
    
        return(
            <div className = 'container-textarea'>
            <div className = 'error-textarea'>
                {hasEror && <div className = 'error-style'>
                    {meta.error}
                </div>}
                
            </div>
            <div className = 'textarea'>
                {nameComponent === 'textarea' ? <textarea {...input} {...props}/> : <input {...input} {...props}/> }
                
                
            </div>

        </div>  
        ) 
}

// nameComponent === 'textarea' ? <textarea {...input} {...meta} {...props} /> : 


