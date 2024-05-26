import React from "react";
import "../../styles/itemCard.less";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-img-wrapper">
        <img
          src={urlFor(item.image[0])}
          alt="img"
        />
      </div>
      <div className="item-title">{item.name}</div>
      <div className="item-pric">Rs.{item.price}.00</div>
      <div className="item-pric">
        qty : {item.qty}
      </div>  
      <Link to={`/items/store/${item.slug.current}`} className="item-add-cart">
        <i className="ri-shopping-cart-line"></i>
      </Link>
    </div>
  );
}

export default ItemCard;
