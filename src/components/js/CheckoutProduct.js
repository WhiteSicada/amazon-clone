import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/CheckoutProduct.css";
import { removeFromBasket } from "../../features/basket/basketSlice";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    // remove the item from the basket
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkoutProduct" key={id}>
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={() => removeItemFromBasket(id)}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
