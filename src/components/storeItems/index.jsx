import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard";
import "../../styles/storeItems.less";

import { useStateContext } from "../../context/StateContext";
import { useLocation } from "react-router-dom";

function StoreItems() {
  const { products } = useStateContext();
  const [filterProducts, setFilterProducts] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/store/crochets") {
      const docs = products.filter((item) => item.category === "chochet");
      setFilterProducts(docs);
      return;
    }
    if (pathname === "/store/digital-arts") {
      const docs = products.filter((item) => item.category === "digitalArts");
      setFilterProducts(docs);
      return;
    }
    if (pathname === "/store/wooden-statues") {
      const docs = products.filter((item) => item.category === "woodenStatues");
      setFilterProducts(docs);
      return;
    }
  }, [pathname]);

  return (
    <div className="store-items">
      {filterProducts &&
        filterProducts?.map((item) => <ItemCard item={item} key={item.slug.current} />)}
    </div>
  );
}

export default StoreItems;
