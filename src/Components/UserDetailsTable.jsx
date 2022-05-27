import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, sortData } from "../Store/Slices/userDetailsSlice";

export default function UserDetailsTable() {
	let userData = useSelector((state) => state.userDetails.userData);
	let [sorted, setSorted] = useState("asc");

	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(sortData("desc"));
		setSorted("asc");
	}, []);

	if (userData.length === 0) {
		return null;
	}

	function sortingDataByName() {
		dispatch(sortData(sorted));
		setSorted(sorted === "asc" ? "desc" : "asc");
	}

	return (
		<div className="py-20 w-[80%] lg:w-[60%] mt-10 ">
			<div className="mb-8 font-bold text-2xl">User Details Table</div>

			<table className="table-auto w-full ">
				<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
					<tr>
						<th
							className="p-2 py-4 cursor-pointer  flex items-center justify-between h-full"
							onClick={sortingDataByName}
						>
							<span>Name</span>
							{sorted === "asc" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
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
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</th>
						<th className="p-2 py-4">Email</th>
						<th className="p-2 py-4">Phone</th>
						<th className="p-2 py-4">Address</th>
						<th className="p-2 py-4">Date of birth</th>
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
									onClick={() => dispatch(deleteData(userDetail.userId))}
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
