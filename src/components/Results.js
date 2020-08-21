import React, { Component } from 'react'
import './Results.css';
import Result from './Result'

export class Results extends Component {
    render() {
        let results = this.props.collections.map(c => <Result key={c.id} title={c.title} summary={c.summary}/>);

        return (
            <div className="results-div">
                {results}
            </div>
        )
    }
}

export default Results
