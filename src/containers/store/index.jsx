import React from "react";
import "../../styles/store.less";
import { NavLink, Outlet } from "react-router-dom";

function Store() {
  return (
    <div className="store">
      <div className="sidebar">
        <NavLink className='sidebar-item' to={"crochets"}>Crochet</NavLink>
        <NavLink className='sidebar-item' to={"digital-arts"}>Digital Arts</NavLink>
        <NavLink className='sidebar-item' to={"wooden-statues"}>Wooden Statues</NavLink>
      </div>
      <div className="shop-items">
        <Outlet />
      </div>
    </div>
  );
}

export default Store;
