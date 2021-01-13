import React, {Component} from 'react';

export default class FormToggle extends Component{
    
    constructor()
    {
        super();

        this.state = {
            isClicked: false,
        }
    }

    hide = () =>{
        this.setState({
            isClicked: true
        })
    }

    show = () =>{
        this.setState({
            isClicked: false
        })
    }
    
    render()
    {
        
        return(
            <div className = "folderContainer">
                {
                    this.state.isClicked?
                    <div className="Folder">
                         <h1>Home</h1>
                         <button onClick = {this.show}>Show</button>
                    </div>
                   
                    :
                    <div className="Folder">
                        <h1>Home</h1>
                        <ul className="FolderList">
                            <li><h2>File1</h2></li>
                            <li><h2>File2</h2></li>
                            <li><h2>File3</h2></li>
                        </ul>
                        <button onClick = {this.hide}>Hide</button>
                    </div>
                }
            </div>
        );
    }
}