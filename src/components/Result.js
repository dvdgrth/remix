import React, { Component } from 'react'
import Rating from './Rating';
import './Result.css';



export class Result extends Component {
    clicked() {
        console.log(this);
    }

    render() {
        return (
            <div className="result-div" onClick={() => this.clicked()}>
                <h2>{this.props.title}</h2>
                <p>{this.props.summary}</p>
                <Rating />
            </div>
        )
    }
}

export default Result


