import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1,
                })
              )
            }
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cost: ₹{totalCost}</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <br />
      <button onClick={() => window.location.href = "/"}>
  Continue Shopping
</button>
    </div>
  );
}

export default CartItem;

