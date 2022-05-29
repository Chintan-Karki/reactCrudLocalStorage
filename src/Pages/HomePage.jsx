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
					className="hidden sm:block absolute top-2 right-0 bg-slate-200 border-2 rounded-md p-2 px-4 w-fit text-xs"
					onClick={() => refTable.current.scrollIntoView()}
				>
					Go to table
				</button>
				<div className="my-8 mt-2 font-bold text-lg sm:text-2xl w-5/6 ">Add your details</div>
				<UserForm />
			</section>

			{/* Table Section */}
			<section
				ref={refTable}
				className="flex flex-col justify-center w-4/5 lg:w-3/5 mt-20"
			>
				<UserDetailsTable />
				<div className="flex flex-row justify-start gap-4  ">
					<Link
						to="profiles"
						className="transition-all flex items-center justify-center w-1/2 md:w-fit bg-gray-50 hover:bg-slate-200 hover:text-gray-600 border border-blue-600 rounded-lg h-10 px-4 my-10 text-xs md:text-md"
					>
						Go to User Profiles
					</Link>
					<button
						className="transition-all flex items-center justify-center w-1/2 md:w-fit bg-gray-50 hover:bg-slate-200 hover:text-gray-600 border rounded-lg h-10 px-4 my-10 text-xs md:text-md"
						
						onClick={() => refForm.current.scrollIntoView()}
					>
						Add more data
					</button>
				</div>
			</section>
		</div>
	);
}
