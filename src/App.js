import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import AddButton from './components/AddButton';
import SortButton from './components/SortButton';
import Popup from './components/Popup'

import getDATA from './data/api_simulator'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(props) {
  return ( 
      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/collection" render={(props) => (<Collection {...props} isAuthed={true} />)} />
          <Route path="/">
            <Home collections={props.collections}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;




function Home(props) {
  const [collections, setCollections] = useState(props.collections);
  const [showPopup, setShowPopup] = useState(false);
  
  
  function addCollection(newCollection) {
    setCollections([...collections, newCollection]);
  }

  return (
    <div className="App">
      <h1 className="title">Link Collections</h1>
      <div className="search-add-grid">
        <SearchBar />
        <AddButton setShowPopup={setShowPopup}/>
      </div>
      <SortButton />
      <Results collections={collections}/>
      <Popup addCollection={addCollection} showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>)
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function Collection(props) {
  const collection = getDATA(props.location.state.id);
  return (
    <div>
      <h2>{collection.title}</h2>
      <p>{collection.summary}</p>
      {collection.links.map(l => (<a href={l}>{l}</a>))}
    </div>
  );
}
