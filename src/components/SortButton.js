import React, { Component } from 'react'
import './SortButton.css'

export class SortButton extends Component {
    render() {
        return (
            <div className="sort-div">
                Sort By:
                <select className="sort-button">
                    <option>Date</option>
                    <option>Rating</option>
                </select>
            </div>
        )
    }
}

export default SortButton
