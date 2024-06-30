import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default userSlice.reducer;
