import React, { Component } from 'react'
import Rating from './Rating';
import './Result.css';

import {
    Link
} from "react-router-dom";



export class Result extends Component {
    clicked() {
        // console.log(this);
    }

    render() {
        return (   
            <div className="result-div" onClick={() => this.clicked()}>
                <Link to={{
                    pathname: "/collection",
                    query: {id: this.props.collection.id},
                    state:{id: this.props.collection.id}
                }}
                >
                    <h2>{this.props.collection.title}</h2>
                    <p>{this.props.collection.summary}</p>
                    <Rating />
                </Link> 
            </div>                               

        )
    }
}

export default Result


