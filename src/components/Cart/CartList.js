import React, { memo } from "react";
import CartItem from "./CartItem";

export default memo(function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
});
