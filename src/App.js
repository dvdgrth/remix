import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import AddButton from './components/AddButton';
import SortButton from './components/SortButton';
import Popup from './components/Popup';
import Collection from './components/Collection';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(props) {
  const [collections, setCollections] = useState(props.collections);
  
  function addCollection(newCollection) {
    setCollections([...collections, newCollection]);
  }

  function getDATA(id) {
    // console.log(`inside api. seraching for ${id}`);
    return collections.filter((collection) => collection.id === id)[0];
  }

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
          <Route path="/collection/:id" render={(props) => (<Collection {...props} getDATA={getDATA} />)} />
          <Route path="/">
            <Home collections={collections} addCollection={addCollection}/>
          </Route>

        </Switch>
      </div>
      
      <div className="todo-div">
        TODOs:
        <br/>
        Form validation
        <br/>
        Searching
        <br/>
        Sorting
        <br/>
        Rating 
        <br/>
        Responsive Design
        <br/>
        Better Design
        <br/>
        More initial data
        <br/>
        review Routing
        <br/>
        shield Css
      </div>
    </Router>
  );
}

export default App;




function Home(props) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Link Collections</h1>
      <div className="search-add-grid">
        <SearchBar />
        <AddButton setShowPopup={setShowPopup}/>
      </div>
      <SortButton />
      <Results collections={props.collections}/>
      <Popup addCollection={props.addCollection} showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>)
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


