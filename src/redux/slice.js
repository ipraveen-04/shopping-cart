import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //   state.value += 1;
      console.log(action);
      state.items.push(action.payload);
      //   store data in localstorage beause don't vanish on refresh the page
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      //   state.value > 0 ? (state.value -= 1) : null;
      const cartData = state.items.filter(
        (item) => item.id != action.payload.id
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
    clearAllItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearAllItem } = addToCart.actions;

export default addToCart.reducer;
