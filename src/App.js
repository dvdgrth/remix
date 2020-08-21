import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import AddButton from './components/AddButton';
import SortButton from './components/SortButton';

function App(props) {
  return (
    <div className="App">
      <h1 className="title">Link Collections</h1>
      <div className="search-add-grid">
        <SearchBar />
        <AddButton />
      </div>
      <SortButton />
      <Results collections={props.collections}/>
    </div>
  );
}

export default App;
