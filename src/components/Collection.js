import React from 'react';
// import getDATA from './../data/api_simulator';
import './Collection.css';
import Rating from './Rating';

function Collection(props) {
    const collection = props.getDATA(props.location.state.id);

    let links = [];
    for (let i = 0; i < collection.links.length; i++) {
        links.push(<a href={collection.links[i]} key={i} className="collection-link" target="_blank" rel="noopener noreferrer">{collection.links[i]}</a>);
        
    }


    return (
      <div className="collection-div">
        <h1>{collection.title}</h1>
        <p>{collection.summary}</p>
        <Rating rating={collection.rating}/>
        <br/>
        {links}
      </div>
    );
}

export default Collection

