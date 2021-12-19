import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import "../css/SubTotal.css";
import { Link, useNavigate } from "react-router-dom";

function SubTotal() {
  const navigate = useNavigate();

  const basket = useSelector((state) => state.basket.basketItems);
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
