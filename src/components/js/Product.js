import React from "react";
import "../css/Product.css";
import {  useDispatch } from "react-redux";
import { addToBasket } from "../../features/basket/basketSlice";

function Product({ id, title, price, rating, image }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={() => addItemToBasket()}>Add to Basket</button>
    </div>
  );
}

export default Product;
