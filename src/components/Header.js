import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="background-style">
      <nav>
        <h1>Math Magicians</h1>
        <ul id="desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
