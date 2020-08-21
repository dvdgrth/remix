import React, { Component } from 'react'
import './SearchBar.css';

export class SearchBar extends Component {
    inputReceived(e) {
        console.log(e.currentTarget.value);
    }

    render() {
        return (
            <div className="search-div">
                <input type="text" placeholder="Search Link Collections..." className="search-bar" onInput={(e) => this.inputReceived(e)}/>
            </div>
        )
    }
}

export default SearchBar
