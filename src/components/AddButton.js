import React, { Component } from 'react'
import "./AddButton.css";

export class AddButton extends Component {
    render() {
        return (
            <div className="add-div">
                <button className="add-button">Add a Collection</button>
            </div>
        )
    }
}

export default AddButton
