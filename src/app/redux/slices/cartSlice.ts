import { createSlice, current } from "@reduxjs/toolkit";
import { AppState } from "../store";

export type Book = {
  id: String;
  title: String;
  price: number;
  author: String;
  cover: String;
  intro: String;
  brief: String;
  amount: number;
  status: true;
  rate: number;
};

export type Cart = {
  items: Array<Book>;
  value: number;
  amount: number;
};

const initialState: Cart = {
  items: [],
  value: 0,
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.items.find(
        (item) => item.id === payload.item.id
      );
      if (itemInCart) {
        itemInCart.amount += payload.number;
      } else {
        state.items.push({ ...payload.item, amount: payload.number });
      }
      state.value += payload.item.price * payload.number;
      state.amount += payload.number;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cart = (state: AppState) => state.cart;
export default cartSlice.reducer;
