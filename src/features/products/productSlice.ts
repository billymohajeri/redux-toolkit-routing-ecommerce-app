import { createSlice } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type productState = {
  products: Product[];
};

const initialState: productState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
