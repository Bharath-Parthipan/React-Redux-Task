import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Apple iPhone 15 Plus (128 GB) - Blue",
      description: "An apple mobile which is nothing like apple",
      price: 71900,
      discountPercentage: 0.12,
      rating: 5,
      stock: 1,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51wKeZuX6rL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/613xywt-yvL._SL1500_.jpg",
      ],
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro Max (256 GB) - White Titanium",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 151700,
      discountPercentage: 0.5,
      rating: 4,
      stock: 34,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51hWMvjCV8L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71LB1euow1L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71TSx9D2BVL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81MDZsYTIoL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61wo713oiuL._SL1500_.jpg",
      ],
    },
    {
      id: 3,
      title: "Apple iPhone 14 Plus (256 GB) - (PRODUCT) RED",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 81700,
      discountPercentage: 0.15,
      rating: 5,
      stock: 2,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/716fAVud8PL._SL1500_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61ltPAQVVaL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71gApuoaMhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61DZxiEA28L._SL1500_.jpg",
      ],
    },
    {
      id: 4,
      title: "Apple iPhone 14 Pro Max (256 GB) - Gold",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 149900,
      discountPercentage: 0.17,
      rating: 4,
      stock: 123,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SL1500_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/618-4t3xcbL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71qK2dh4o0L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71dKjvLPkAL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91wGCiIAniL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61clO95EgwL._SL1500_.jpg",
      ],
    },
    {
      id: 5,
      title: "Apple iPhone 13 Pro (128GB) - Sierra Blue",
      description:
        "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 62800,
      discountPercentage: 0.18,
      rating: 4,
      stock: 32,
      quantity: 1,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71rswJs9W9L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81DzfVDR-lL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/7161nwSVX9L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81woDMsj8DL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61Tda9m5UUL._SL1500_.jpg",
      ],
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.total = item.quantity * item.price;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        item.total = item.quantity * item.price;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
