import React from "react";
import "./header.scss";
function Header() {
  return (
    <nav className="nav-section">
      <div className="brand-logo">
        <h1>BIN</h1>
      </div>
      <div className="nav-menu">
        <div className="home">Home</div>
        <div className="learn">Learn</div>
        <div className="compete">Compete</div>
        <div className="about">About</div>
      </div>
      <div className="entry-section">
        <button className="login-btn btn">Login</button>
        <button className="joinNow-btn btn">Join Now</button>
      </div>
    </nav>
  );
}

export default Header;
