import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favourite";

export default configureStore({
  reducer: {
    favourite: favouriteSlice,
  },
});
