import React from "react";

export default function Footer() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className=" mt-12 mb-8 text-xs font-light w-4/5 lg:w-3/5">
				Built by{" "}
				<a
					href="https://github.com/Chintan-Karki/"
					target="_blank"
					rel="noreferrer"
					className="text-blue-700 font-bold"
				>
					Chintan karki
				</a>{" "}
				with ❤️
			</div>
		</div>
	);
}
