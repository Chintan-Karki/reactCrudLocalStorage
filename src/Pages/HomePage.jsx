import React from "react";
import UserForm from "../Components/UserForm";
import UserDetailsTable from "../Components/UserDetailsTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
	let userData = useSelector((state) => state.userDetails.userData);

	return (
		<div className="App flex items-center justify-center  flex-col ">
			<section className="flex flex-col justify-center w-4/5 lg:w-3/5">
				<div className="my-8 mt-20 font-bold text-2xl">Add your details</div>
				<UserForm />
			</section>
			<section className="flex flex-col justify-center w-4/5 lg:w-3/5 ">
				{userData.length === 0 && (
					<section className="mb-20">
						<div className="font-bold text-2xl mt-20">
							No data found in table
						</div>
						<p className="text-xs"> Please add some details from the form.</p>
					</section>
				)}
				{userData.length !== 0 && (
					<>
						<div className="font-bold text-2xl mt-20 mb-12">
							User Details Table
						</div>
						<UserDetailsTable />
					</>
				)}
			</section>
			{userData.length !== 0 && (
				<div className="flex flex-col justify-center w-4/5 lg:w-3/5 ">
					<Link
						to="profiles"
						className="transition-all flex items-center justify-center w-[80%] md:w-fit bg-gray-50 hover:bg-gray-200 hover:text-gray-600 border border-blue-600 rounded-lg h-12 px-4 my-10"
					>
						Go to Profiles
					</Link>
				</div>
			)}
		</div>
	);
}
