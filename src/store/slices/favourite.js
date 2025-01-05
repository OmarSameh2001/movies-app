import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFavourite: (state, action) => {
      state.value = state.value.filter(
        (movie) => movie.id !== action.payload
      );
    },
    deleteAllFavourites: (state) => {
      state.value = [];
    },
  },
});

export const { addFavourite, deleteFavourite, deleteAllFavourites } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;

