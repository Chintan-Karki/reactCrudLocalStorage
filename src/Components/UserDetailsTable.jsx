import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, sortData } from "../Store/Slices/userDetailsSlice";
import ChevronDown from "./atoms/ChevronDown";
import DeleteIcon from "./atoms/DeleteIcon";
import EditIcon from "./atoms/EditIcon";
import SortIcon from "./atoms/SortIcon";
import Search from "./Search";

export default function UserDetailsTable() {
	let userData = useSelector((state) => state.userDetails.userData);

	// maintaining the search through redux
	let searchQuery = useSelector((state) => state.searchDetails.searchQuery);
	userData = userData.filter((item) => {
		return (
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.email.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	let [sorted, setSorted] = useState(false);

	let dispatch = useDispatch();

	function sortingDataByName() {
		dispatch(sortData(sorted));
		setSorted(true);
	}

	function deleteUser(userId) {
		let filteredList = [...userData].filter((user) => user.userId !== userId);
		localStorage.setItem("userData", JSON.stringify(filteredList));
		dispatch(deleteData(userId));
	}

	return (
		<>
			<Search />
			{userData.length === 0 ? (
				<>
					<section className="mb-20">
						<div className="font-bold text-2xl mt-10">
							No data found in table
						</div>
						<p className="text-xs"> Please add some details from the form.</p>
					</section>
				</>
			) : (
				<>
					<div className="font-bold text-2xl my-6">User Details Table</div>

					<div className=" w-full overflow-x-auto overflow-scroll rounded-t-xl">
						<table className="table-auto w-full overflow-x-scroll bg-blue-50/40 ">
							<thead className="text-xs font-semibold uppercase text-gray-400 bg-indigo-50 ">
								<tr>
									<th
										className="p-2 pl-4 py-4 cursor-pointer hover:bg-indigo-50"
										onClick={sortingDataByName}
									>
										<div className="flex items-center justify-between h-full ">
											<span>Name</span>
											{sorted ? <ChevronDown /> : <SortIcon />}
										</div>
									</th>
									<th className="p-2 pl-4 py-4">Email</th>
									<th className="p-2 pl-4 py-4">Phone</th>
									<th className="p-2 pl-4 py-4 w-2/6">Address</th>
									<th className="p-2 pl-4 py-4">Date of birth</th>
									<th className="p-2 pl-4 py-4"></th>
									<th className="p-2 pl-4 py-4"></th>
								</tr>
							</thead>
							<tbody className="text-sm divide-y divide-indigo-200">
								{userData.map((userDetail) => (
									<tr key={userDetail.userId}>
										<td className="p-2 pl-4 py-4 text-left">
											{userDetail.name}
										</td>
										<td className="p-2 pl-4 py-4 text-center">
											{userDetail.email}
										</td>
										<td className="p-2 pl-4 py-4 text-center">
											{userDetail.phone}
										</td>
										<td className="p-2 pl-4 py-4 text-center w-2/6">
											{(userDetail.country !== "") |
												(userDetail.province !== "") |
												(userDetail.district !== "") |
												(userDetail.city !== "") && (
												<>
													{userDetail.city.trim() !== "" &&
														userDetail.city + ", "}
													{userDetail.district.trim() !== "" &&
														userDetail.district + ", "}
													{userDetail.province && userDetail.province + ", "}
													{userDetail.country && userDetail.country}.{" "}
												</>
											)}
										</td>
										<td className="p-2 pl-4 py-4 text-center">
											{userDetail.dateOfBirth}
										</td>
										<td className="p-2 pl-4 py-4 text-center">
											<div
												className="p-2  flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-700/20 "
												onClick={() => deleteUser(userDetail.userId)}
											>
												<DeleteIcon />
											</div>
										</td>
										<td className="p-2 pl-4 text-center">
											<Link
												className="p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700/10 "
												to="/edit_detail"
												state={userDetail}
											>
												<EditIcon />
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
		</>
	);
}
