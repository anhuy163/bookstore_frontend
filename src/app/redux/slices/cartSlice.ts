import { createSlice, current } from "@reduxjs/toolkit";
import { AppState } from "../store";

export type Book = {
  bookId?: string;
  bookAva?: string;
  bookName?: string;
  discount?: number;
  priceNow?: number;
  priceOld?: number;
  quantity?: number;
  status?: boolean;
};

export type Cart = {
  items?: Array<Book>;
  value?: number;
  quantity?: number;
};

const initialState: Cart = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.items.find(
        (item) => item.bookId === payload.bookId
      );
      if (itemInCart) {
        itemInCart.quantity += payload.quantity;
      } else {
        state.items.push({ ...payload });
      }
      // state.value += payload.item.price * payload.number;
      state.quantity += payload.quantity;
    },
    setCart: (state, { payload }) => {
      return {
        ...state,
        items: payload.cartItemResponses,
        value: payload.totalPrice,
        quantity: payload.total,
      };
    },
    updateItem: (state, { payload }) => {
      const itemInCart = state.items.find(
        (item) => item.bookId === payload.bookId
      );
      state.quantity =
        state.quantity + (payload.quantity - itemInCart.quantity);
      itemInCart.quantity = payload.quantity * 1;
    },
  },
});

export const { addToCart, setCart, updateItem } = cartSlice.actions;
export const cart = (state: AppState) => state.cart;
export default cartSlice.reducer;
