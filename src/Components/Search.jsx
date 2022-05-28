import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../Store/Slices/searchDataSlice";
import SearchIcon from "./atoms/SearchIcon";

export default function Search() {
	let searchQueryFromStore = useSelector(
		(state) => state.searchDetails.searchQuery
	);
	let dispatch = useDispatch(setSearchQuery);

	return (
		<div>
			<label className="text-sm ">Search data in the table </label>
			<div className="relative">
				<input
					type="text"
					name="query"
					id="query"
					value={searchQueryFromStore}
					onChange={(event) => {
						dispatch(setSearchQuery(event.target.value));
					}}
					className="appearance-none mt-2 block w-full bg-grey-lighter focus:ring-indigo-500 focus:border-indigo-500 text-grey-darker border border-indigo-700 rounded-lg h-10 px-4 pl-12"
					placeholder="Search data in the table"
				/>
				<div className="relative inline-block -top-8 left-3 w-6">
					<SearchIcon />
				</div>
			</div>
		</div>
	);
}
