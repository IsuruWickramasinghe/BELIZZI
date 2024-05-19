import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/header.less";

function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById("body");
    if (pathname.startsWith("/store") || pathname.startsWith('/cart') || pathname.startsWith('/items')) {
      root.classList.add("storeTheme");
    } else {
      root.classList.remove("storeTheme");
    }
  }, [pathname]);

  return (
    <header className="header">
      <div className="logo">
        <span>BELIZZI</span>
      </div>
      <nav id="nav" className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/store">
          Store
        </NavLink>
      </nav>
      <NavLink className="cart" to="/cart">
        <i className="ri-shopping-cart-line"></i> 10
      </NavLink>
    </header>
  );
}

export default Header;