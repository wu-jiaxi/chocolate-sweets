import React, { memo } from "react";
import CartItem from "./CartItem";

export default memo(function CartList(value) {
    const { cart } = value;
    console.log(value, cart);


  return (
    <div>
      hello from cart list
      <CartItem></CartItem>
    </div>
  );
});
