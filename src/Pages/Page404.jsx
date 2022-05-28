import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
	return (
		<section className="flex flex-col justify-center items-center ">
			<div className="w-4/5 lg:w-3/5">
				<div className="my-8 mb-2 mt-20 font-bold text-2xl w-full">
					Oops! you've ran into Error 404
				</div>
				<p className="text-xs mb-8">You are in the wrong route.</p>
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
