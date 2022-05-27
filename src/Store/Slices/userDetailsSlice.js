import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: localStorage.getItem("userData")
		? JSON.parse(localStorage.getItem("userData"))
		: [],
};

export const userDetails = createSlice({
	name: "userDetails",
	initialState,
	reducers: {
		addUserData: (state, action) => {
            state.userData = [...state.userData, action.payload];
			localStorage.setItem(
				"userData",
				JSON.stringify([...state.userData, action.payload])
			);
		},
		sortData: (state, action) => {
			switch (action.payload) {
				case "asc":
					state.userData = [...state.userData].sort((a, b) =>
						a.name.localeCompare(b.name)
					);
					break;
				case "desc":
					state.userData = [...state.userData].sort((a, b) =>
						b.name.localeCompare(a.name)
					);
					break;
				default:
					return;
			}
		},
		deleteData: (state, action) => {
			let filteredList = [...state.userData].filter(
				(user) => user.userId !== action.payload
			);
			localStorage.setItem("userData", JSON.stringify(filteredList));
			state.userData = filteredList;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addUserData, sortData, deleteData } = userDetails.actions;

export default userDetails.reducer;
