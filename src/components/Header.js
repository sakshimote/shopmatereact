import React from 'react';
import './Header.css';
import {Link,NavLink} from 'react-router-dom';
import images from '../assets/images.png'

export const Header = () => {
  return (
    <header>
    <Link to="/" className="logo">
        <img src={images} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  )
}
