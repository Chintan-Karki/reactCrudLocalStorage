import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
};

export const userDetails = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeName } = userDetails.actions;

export default userDetails.reducer;
