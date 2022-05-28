import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserForm from "../Components/UserForm";

export default function EditDataPage() {
	const location = useLocation();

	if (location.state === null) {
		return (
			<section className="flex flex-col justify-center items-center ">
				<div className="w-4/5 lg:w-3/5">
					<div className="my-8 mb-2 mt-20 font-bold text-2xl w-full">
						Oops! no user found 😅.
					</div>
					<p className="text-xs mb-8">Something might have gone wrong.</p>
					<p>
						Go back to{" "}
						<Link to="/" className="text-blue-700">
							homepage
						</Link>{" "}
						.
					</p>
				</div>
			</section>
		);
	}

	return (
		<section className="flex flex-col justify-center items-center ">
			<div className="w-4/5 lg:w-3/5">
				<div className="my-8 mt-6 font-bold text-2xl w-full">
					Edit your details
				</div>
				<UserForm userDetail={location.state} />
			</div>
		</section>
	);
}
