import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  country: string;
  admin: boolean;
};

type UserState = {
  users: User[];
};

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { registerUser } = userSlice.actions;
