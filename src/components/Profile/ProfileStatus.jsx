import React from 'react';

class ProfileStatus extends React.Component{

    

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    
    render(){
        return(
            <div>
                {this.state.editMode ? 
                <input autoFocus = {true} onBlur = {this.deActivateEditMode} onChange = {this.onStatusChange} value = {this.state.status}></input>:
                
            <div onClick = {this.activateEditMode} >{this.props.status || 'No status'}</div> 
            
                }
            </div>
                
        )
    }
}

export default ProfileStatus;