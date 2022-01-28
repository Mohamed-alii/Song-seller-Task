import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const userSelectionState = useSelector((state) => state);

  return (
    <div className="checkout">
      <header className="checkout__header">
        <h2>Order summary</h2>
      </header>
      <div className="checkout__content">
        <div className="checkout__content__left">
          <p className="text-title">Name</p>
          <p className="text-title">Email</p>
          <p className="text-title">Price</p>
          <p className="text-title">Total songs</p>
        </div>
        <div className="checkout__content__rigth">
          <p className="text-info">{userSelectionState.name}</p>
          <p className="text-info">{userSelectionState.email}</p>
          <p className="text-info">$ {userSelectionState.totalPrice}</p>
          <p className="text-info">{userSelectionState.totalCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
