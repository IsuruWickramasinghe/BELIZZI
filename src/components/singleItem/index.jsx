import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { useNavigate, useParams } from "react-router-dom";
import { urlFor } from "../../lib/client";

function SingleItem() {
  const navigate = useNavigate();
  const {
    products,
    changeQuantitiesMax,
    changeQuantitiesMin,
    selectedQuantities,
    onAdd
  } = useStateContext();
  const { itemId } = useParams();
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    if (products) {
      const filterProduct = products.filter(
        (item) => item.slug.current === itemId
      );
      setSelectedItem(filterProduct);
    }
  }, [products, itemId]);

  return (
    <div className="single-item">
      <div className="img-wrapper">
        {selectedItem[0]?.image ? (
          <img src={urlFor(selectedItem[0]?.image[0])} alt="" />
        ) : (
          <div>image loading</div>
        )}
      </div>
      <div className="item-details-wrapper">
        <div className="item-title">{selectedItem[0]?.name}</div>
        <div className="item-price">Rs.{selectedItem[0]?.price}.00</div>
        <div className="item-desc">
          <div>Description</div>
          <p>{selectedItem[0]?.details_desc}</p>
        </div>
        <div className="item-quantity">
          <div className="item-quantity-title">QUANTITY</div>
          <div className="select-quantity">
            <button className="quant-min" onClick={changeQuantitiesMin}>
              -
            </button>
            <div className="quant-val">{selectedQuantities}</div>
            <button className="quant-max" onClick={changeQuantitiesMax}>
              +
            </button>
          </div>
        </div>
        <div className="store-btns">
          <button
            onClick={() => {
              onAdd(selectedItem[0],selectedQuantities),navigate('/cart');
            }}
          >
            <i className="ri-shopping-cart-line"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
