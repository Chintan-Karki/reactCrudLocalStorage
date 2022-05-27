import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./Slices/userDetailsSlice";

export const store = configureStore({
	reducer: {
		userDetails: userDetailsReducer,
	},

	devTools: true,
});
