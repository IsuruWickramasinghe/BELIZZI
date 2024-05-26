import React, { useEffect } from "react";
import "../../styles/store.less";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

function Store() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/store") navigate("/store/crochets", { replace: true });
  }, [pathname]);

  return (
    <div className="store">
      <div className="sidebar">
        <NavLink className="sidebar-item" to={"crochets"}>
          Crochet
        </NavLink>
        <NavLink className="sidebar-item" to={"digital-arts"}>
          Digital Arts
        </NavLink>
        <NavLink className="sidebar-item" to={"wooden-statues"}>
          Wooden Statues
        </NavLink>
      </div>
      <div className="shop-items">
        <Outlet />
      </div>
    </div>
  );
}

export default Store;
