import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/js/Checkout";
import { auth } from "./firebase";
import Login from "./components/js/Login";
import { useDispatch } from "react-redux";
import { setUser } from "./features/user/userSlice";
import Payement from "./components/js/Payement";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/js/Orders";

const promise = loadStripe(
  "pk_test_51K7i9rI3BPtoAvjm2I3hHgKOZ6hOE1RlXlJPUFddiuaXtqEeaYkQJz0BImrntq1nVdWkU9Mr22OHCMZlgoPp3rlQ00qGdNXBzC"
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is : " + JSON.stringify(authUser));
      if (authUser) {
        // the user just logged in or the use was logged in
        dispatch(setUser(authUser));
      } else {
        // the user is logged out
        dispatch(setUser(null));
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exaxt path="/login" element={<Login />} />
          <Route
            exaxt
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payement />
              </Elements>
            }
          />
          <Route exaxt path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
