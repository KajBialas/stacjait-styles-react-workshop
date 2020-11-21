import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <a className="header__navElement" href="/">Home page</a>
        <a className="header__navElement header__navElement--red" href="/">Contact</a>
      </nav>
    </div>
  )
}

export default Header;