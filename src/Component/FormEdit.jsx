import React, {Component} from 'react';

export default class FormEdit extends Component{
    
    constructor()
    {
        super();
        this.state = {
            firstName: 'Mark',
            lastName: 'Gold',
            updateFirstName: ' ',
            updateLastName: ' ',
            isClick: false,
        }
    }

    

    handleSubmit = (event) =>{
        event.preventDefault()
        this.setState({isClick: true})
    }

    handleNameChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSave = () =>{
        this.setState({isClick: false, firstName: this.state.updateFirstName, lastName: this.state.updateLastName})
    }   

    handleCancel = () =>{
        this.setState({isClick: false})
    }
    
    render()
    {
        let isClickCheck = this.state.isClick;
        return(
            <div className = "Container">
                {isClickCheck? 
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <input type = 'text' placeholder="Your FirstName..." name = 'updateFirstName'  onChange= {this.handleNameChange}></input>
                    <input type = 'text' placeholder="Your lastName..." name = 'updateLastName'  onChange = {this.handleNameChange}></input>
                    <button onClick = {this.handleSave}>Save</button>
                    <button onClick = {this.handleCancel}>Cancel</button>
                    </form>
                </div> : 
                <div>
                    <div><h1>{this.state.firstName}</h1></div>
                    <div><h1>{this.state.lastName}</h1></div>
                    <button className = "editButton" onClick = {this.handleSubmit}>Edit</button>
                </div>}
            </div>
        );
    }
}