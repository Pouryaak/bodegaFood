import React from "react";
import { List } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";
import { increaseItem, decreaseItem } from "../../features/cartSlice";
import CartItem from "./CartItem";

function CartItems() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const addMoreHandler = (id) => {
    dispatch(increaseItem(id));
  };
  const decreaseItemHandler = (id) => {
    dispatch(decreaseItem(id));
  };

  return (
    <>
      <List celled ordered>
        {cart.map((item) => (
          <CartItem
            item={item}
            addMore={addMoreHandler}
            reduceItem={decreaseItemHandler}
          />
        ))}
      </List>
    </>
  );
}

export default CartItems;
