import React, { Component } from 'react'
import './Results.css';
import Result from './Result'

export class Results extends Component {
    render() {
        let results = this.props.collections.map(c => <Result collection={c} key={c.id}/>);

        return (
            <div className="results-div">
                {results}
            </div>
        )
    }
}

export default Results
