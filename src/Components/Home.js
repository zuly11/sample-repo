import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="home-page">
      {/* Navigation bar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/xbox">Xbox</Link></li>
          <li><Link to="/playstation">PlayStation</Link></li>
          <li><Link to="/nintendo">Nintendo</Link></li>
        </ul>
      </nav>

      {/* Logo */}
      <img className="logo" src="/logo.png" alt="My Video Game Store" />

      {/* Accounts tab */}
      <ul className="tabs">
        <li><Link to="/account">My Account</Link></li>
      </ul>

      {/* Cart tab */}
      <ul className="tabs">
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      {/* Login button */}
      <button className="login-button"><Link to="/login">Login</Link></button>
    </div>
  );
}

export default HomePage;
