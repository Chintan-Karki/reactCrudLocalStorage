import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchQuery: "",
};

export const searchDataSlice = createSlice({
	name: "searchData",
	initialState,
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSearchQuery } = searchDataSlice.actions;

export default searchDataSlice.reducer;
