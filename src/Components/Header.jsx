import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="flex flex-col justify-center items-center">
			<Link
				to="/"
				className="my-2 mt-12 mb-12 font-bold text-4xl w-4/5 lg:w-3/5"
			>
				React CRUD
			</Link>
		</div>
	);
}
