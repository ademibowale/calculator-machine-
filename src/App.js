import './App.css';
import React, { Component } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculate from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculate />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
