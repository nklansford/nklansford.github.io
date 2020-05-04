import React from 'react';
import './App.css';
import ImageCardGallery from './ImageCardGallery'
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <ImageCardGallery />

        <Route exact path="/">Home</Route>
        <Route path="/project-1"><ImageCardGallery /></Route>
      </Router>
    </div>
  );
}

export default App;
