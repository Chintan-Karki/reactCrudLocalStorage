import { configureStore } from "@reduxjs/toolkit";
import searchDataSlice from "./Slices/searchDataSlice";
import userDetailsReducer from "./Slices/userDetailsSlice";

export const store = configureStore({
	reducer: {
		userDetails: userDetailsReducer,
		searchDetails: searchDataSlice,
	},
	devTools: true,
});
