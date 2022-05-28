import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: JSON.parse(localStorage.getItem("userData")) || [],
};

export const userDetails = createSlice({
	name: "userDetails",
	initialState,
	reducers: {
		addUserData: (state, action) => {
			state.userData = [...state.userData, action.payload];
		},
		sortData: (state, action) => {
			let sortedArrayAsc = [...state.userData].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			state.userData = sortedArrayAsc;
		},
		deleteData: (state, action) => {
			let filteredList = [...state.userData].filter(
				(user) => user.userId !== action.payload
			);
			localStorage.setItem("userData", JSON.stringify(filteredList));
			state.userData = filteredList;
		},
		updateUserDetails: (state, action) => {
			const updatedData = [...state.userData].map((x) =>
				x.userId === action.payload.userId ? (x = action.payload) : x
			);
			localStorage.setItem("userData", JSON.stringify(updatedData));
			state.userData = updatedData;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addUserData, sortData, deleteData, updateUserDetails } =
	userDetails.actions;

export default userDetails.reducer;
