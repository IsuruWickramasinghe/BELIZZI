import React from "react";
import "../../styles/itemCard.less";
import { Link } from "react-router-dom";

function ItemCard({ itemType }) {
  return (
    <div className="item-card">
      <div className="item-img-wrapper">
        <img
          src="https://5.imimg.com/data5/ANDROID/Default/2021/7/OH/LK/BB/133083157/screenshot-20210705-201448-google-jpg-500x500.jpg"
          alt="img"
        />
      </div>
      <div className="item-title">Item Title dsjhvb kdjfgh adkjga</div>
      <div className="item-pric">Rs.2500.00</div>
      <div className="item-ratings">
        3.5 <i className="ri-star-fill"></i>
      </div>
      <Link to={`/items/store/${'isuru'}`} className="item-add-cart">
        <i className="ri-shopping-cart-line"></i>
      </Link>
    </div>
  );
}

export default ItemCard;
