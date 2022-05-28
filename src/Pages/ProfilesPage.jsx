import React from "react";
import { Link } from "react-router-dom";
import UserDetailsTable from "../Components/UserDetailsTable";
import { useSelector } from "react-redux";

export default function ProfilesPage() {
	let userData = useSelector((state) => state.userDetails.userData);
	return (
		<>
			<section className="flex justify-center items-center  flex-col ">
				{userData.length !== 0 && (
					<div className="w-5/6 lg:w-3/5">
						<div className="flex flex-row justify-between items-center mb-10">
							<h1 className="font-bold text-4xl text-indigo-900 text-left my-4">Profiles</h1>
							<Link
								to="/"
								className="transition-all text-xs  flex items-center justify-center md:w-fit bg-gray-50 hover:bg-gray-200 hover:text-gray-600 border border-blue-500 rounded-lg h-9 my-4 p-4"
							>
								Return to HomePage
							</Link>
						</div>
						<UserDetailsTable />
					</div>
				)}
				{userData.length === 0 && (
					<div className="w-5/6 lg:w-3/5">
						<h1 className="font-bold text-2xl text-left mt-10 mb-5">
							Oops, seems like the list is empty !
						</h1>
						<p className="text-xs">
							Please return back to the{" "}
							<Link to="/" className="cursor-pointer text-blue-600">
								homepage
							</Link>{" "}
							for adding more data.
						</p>
					</div>
				)}
			</section>
		</>
	);
}
