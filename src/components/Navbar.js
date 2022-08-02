import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/calculator">Calculator</Link>
      </div>
    </nav>
  );
}

export default Navbar;
