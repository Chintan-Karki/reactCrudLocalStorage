import React from "react";
import { Link } from "react-router-dom";
import { toPascalCase } from "../Services/helpers";

export default function ProfileCard({ userDetail }) {
	let userName = userDetail.name.trim();
	let firstName = toPascalCase(userName.split(" ")[0]);
	return (
		<div className="p-6 w-full bg-white rounded-lg border border-gray-200  ">
			<Link to="/edit_detail" state={userDetail}>
				<h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900/80 ">
					{userName}{" "}
				</h5>
			</Link>

			<p className="mb-3 font-normal text-gray-700 text-sm">
				<strong>Phone:</strong> {userDetail.phone}
			</p>
			<p className="mb-1 font-normal text-gray-700 text-sm">
				<strong>About:</strong>
			</p>
			<p className="mb-3 font-normal text-gray-700 text-sm">
				{firstName} was born on {userDetail.dateOfBirth}.{" "}
				{(userDetail.country !== "") |
					(userDetail.province !== "") |
					(userDetail.district !== "") |
					(userDetail.city !== "") && (
					<>
						{firstName}'s current address is{" "}
						{userDetail.city.trim() !== "" && userDetail.city + ", "}
						{userDetail.district.trim() !== "" && userDetail.district + ", "}
						{userDetail.province && userDetail.province + ", "}
						{userDetail.country && userDetail.country}.{" "}
					</>
				)}
			</p>

			<p className="mb-5 font-normal text-gray-700 text-sm">
				<strong>Email:</strong>{" "}
				<a href={"mailto:" + userDetail.email} target="_blank" rel="noreferrer">
					{userDetail.email}
				</a>
			</p>
			<Link
				to="/edit_detail"
				state={userDetail}
				className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
			>
				Edit Details
				<svg
					className="ml-2 -mr-1 w-4 h-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</Link>
		</div>
	);
}
