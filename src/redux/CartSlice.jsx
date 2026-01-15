import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalQuantity += 1;
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity = state.items.length;
    },
    updateQuantity(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
