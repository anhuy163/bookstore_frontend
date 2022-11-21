import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

export type User = {
  email?: string;
  surname?: string;
  name?: string;
  avatar?: string;
  phone?: string;
  role?: string;
};

// const initialState: User = {
//   email: "",
//   surname: "",
//   name: "",
//   avatar: "",
//   phone: "",
// };

const initialState: User = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      // state.avatar = payload?.avatar;
      // state.email = payload?.email;
      // state.surname = payload?.surname;
      // state.name = payload?.name;
      // state.phone = payload?.phone;
      console.log(payload);
      return {
        ...state,
        email: payload?.email,
        surname: payload?.surname,
        name: payload?.name,
        avatar: payload?.avatar,
        phone: payload?.phone,
        role: payload?.role,
      };
    },
    deleteUser: (state) => {
      return null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export const user = (state: AppState) => state.user;

export default userSlice.reducer;
