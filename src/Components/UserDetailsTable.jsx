import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, sortData } from "../Store/Slices/userDetailsSlice";

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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
									</svg>
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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-orange-800"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</div>
							</td>
							<td className="p-2 py-6 text-center">
								<Link
									className="p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700/10 "
									to="/edit_detail"
									state={userDetail}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-blue-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										/>
									</svg>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
