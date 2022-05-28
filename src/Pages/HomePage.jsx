import React, { useRef } from "react";
import UserForm from "../Components/UserForm";
import UserDetailsTable from "../Components/UserDetailsTable";
import { Link } from "react-router-dom";

export default function HomePage() {
	const refTable = useRef(null);
	const refForm = useRef(null);

	return (
		<div className="App flex items-center justify-center  flex-col  ">
			{/* Form Section */}

			<section
				className="flex flex-col justify-center w-4/5 lg:w-3/5 relative"
				ref={refForm}
			>
				<button
					className=" absolute top-2 right-0 bg-slate-200 border-2 rounded-md p-2 px-4"
					onClick={() => refTable.current.scrollIntoView()}
				>
					Scroll to table
				</button>
				<div className="my-8 mt-4 font-bold text-2xl">Add your details</div>
				<UserForm />
			</section>

			{/* Table Section */}
			<section
				ref={refTable}
				className="flex flex-col justify-center w-4/5 lg:w-3/5 mt-20"
			>
				<UserDetailsTable />
				<div className="flex flex-row justify-start gap-4 w-4/5 lg:w-3/5 ">
					<Link
						to="profiles"
						className="transition-all flex items-center justify-center w-[80%] md:w-fit bg-gray-50 hover:bg-gray-200 hover:text-gray-600 border border-blue-600 rounded-lg h-12 px-4 my-10"
					>
						Go to User Profiles
					</Link>
					<button
						className="transition-all flex items-center justify-center w-[80%] md:w-fit bg-gray-50 hover:bg-gray-200 hover:text-gray-600 border border-gray-600/20 rounded-lg h-12 px-4 my-10"
						onClick={() => refForm.current.scrollIntoView()}
					>
						Add more data
					</button>
				</div>
			</section>
		</div>
	);
}
