import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, sortData } from "../Store/Slices/userDetailsSlice";
import ChevronDown from "./atoms/ChevronDown";
import DeleteIcon from "./atoms/DeleteIcon";
import EditIcon from "./atoms/EditIcon";
import SortIcon from "./atoms/SortIcon";

export default function UserDetailsTable() {
	let userData = useSelector((state) => state.userDetails.userData);

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

	if (userData.length === 0) {
		return null;
	}

	return (
		<div className=" w-full overflow-x-auto overflow-scroll">
			<table className="table-auto  overflow-x-scroll">
				<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
					<tr>
						<th
							className="p-2 py-4 cursor-pointer hover:bg-indigo-50"
							onClick={sortingDataByName}
						>
							<div className="flex items-center justify-between h-full ">
								<span>Name</span>
								{sorted ? (
									<ChevronDown/>
								) : (
									<SortIcon/>
								)}
							</div>
						</th>
						<th className="p-2 py-4">Email</th>
						<th className="p-2 py-4">Phone</th>
						<th className="p-2 py-4">Address</th>
						<th className="p-2 py-4">Date of birth</th>
						<th className="p-2 py-4"></th>
						<th className="p-2 py-4"></th>
					</tr>
				</thead>
				<tbody className="text-sm divide-y divide-gray-100">
					{userData.map((userDetail) => (
						<tr key={userDetail.userId} className=" border-b border-indigo-100">
							<td className="p-2 py-6 text-center">{userDetail.name}</td>
							<td className="p-2 py-6 text-center">{userDetail.email}</td>
							<td className="p-2 py-6 text-center">{userDetail.phone}</td>
							<td className="p-2 py-6 text-center">
								{userDetail.city && userDetail.city + " ,"}{" "}
								{userDetail.district && userDetail.district + " ,"}{" "}
								{userDetail.province && userDetail.province + " ,"}{" "}
								{userDetail.country}{" "}
							</td>
							<td className="p-2 py-6 text-center">{userDetail.dateOfBirth}</td>
							<td className="p-2 py-6 text-center">
								<div
									className="p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-700/20 "
									onClick={() => deleteUser(userDetail.userId)}
								>
									<DeleteIcon />
								</div>
							</td>
							<td className="p-2 py-6 text-center">
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
	);
}
