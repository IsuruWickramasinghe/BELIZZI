import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard";
import "../../styles/storeItems.less";

import { useStateContext } from "../../context/StateContext";
import { useLocation } from "react-router-dom";

function StoreItems() {
  const { pathname } = useLocation();
  const { products } = useStateContext();
  const [productsCategory, setProductsCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (pathname === "/store/crochets")
      return setProductsCategory(
        products.filter((item) => item.category === "chochet")
      );
    if (pathname === "/store/digital-arts")
      return setProductsCategory(
        products.filter((item) => item.category === "digitalArts")
      );
    if (pathname === "/store/wooden-statues")
      return setProductsCategory(
        products.filter((item) => item.category === "woodenStatues")
      );
  }, [pathname, products, search]);

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  useEffect(() => {
    const filterItem = productsCategory.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilteredProducts(filterItem);
  }, [search]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search 🔎"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search === "" ? (
        <div className="store-items">
          {productsCategory &&
            productsCategory?.map((item) => (
              <ItemCard item={item} key={item.slug.current} />
            ))}
        </div>
      ) : (
        <div className="store-items">
          {filteredProducts &&
            filteredProducts?.map((item) => (
              <ItemCard item={item} key={item.slug.current} />
            ))}
        </div>
      )}
    </>
  );
}

export default StoreItems;
