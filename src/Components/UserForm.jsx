import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../Store/Slices/userDetailsSlice";
import Swal from "sweetalert2";

export default function UserForm() {
	let dispatch = useDispatch();
	let [countryList, setCountryList] = useState([]);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		let uniqId =
			"id" +
			Math.random().toString(16).slice(2).toString() +
			"id" +
			new Date().getTime();
		data.userId = uniqId.toString();
		dispatch(addUserData(data));
		Swal.fire("Awesome!", "User successfully added", "success");
	};

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				setCountryList(
					data.filter((country) => country.name.common !== "Nepal")
				);
			});
	}, [setCountryList]);

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[80%] lg:w-[60%] mt-20"
			>
				<div className="mb-8 font-bold text-2xl">Add your details</div>
				{/* Name */}
				<div className="mb-7 space-y-2 w-full text-xs">
					<label className="font-semibold text-gray-600 py-2">
						Name <abbr title="required">*</abbr>
					</label>
					<input
						placeholder="Name"
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
						type="text"
						name="name"
						{...register("name", { required: true })}
					/>
					{errors.name && <ErrorText text={"Name is required"} />}
				</div>

				{/* Email */}
				<div className="mb-7 space-y-2 w-full text-xs">
					<label className="font-semibold text-gray-600 py-2">
						Email <abbr title="required">*</abbr>
					</label>
					<input
						placeholder="eg. apple@ball.com"
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
						// required="required"
						type="email"
						name="email"
						{...register("email", { required: true })}
					/>
					{errors.email && <ErrorText text={"Email is required"} />}
				</div>

				{/* Phone number */}
				<div className="mb-7 space-y-2 w-full text-xs">
					<label className="font-semibold text-gray-600 py-2">
						Phone Number <abbr title="required">*</abbr>
					</label>
					<input
						placeholder="eg. 9812312345"
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
						// required="required"
						type="number"
						name="phone"
						{...register("phone", { required: true, minLength: 7 })}
					/>

					{errors.phone && <ErrorText text={"Minimum 7 digits required 😅"} />}
				</div>

				{/* DOB */}
				<div className="mb-7 space-y-2 w-full text-xs">
					<label className="font-semibold text-gray-600 py-2">
						Date of Birth
					</label>
					<input
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
						type="date"
						name="dateOfBirth"
						{...register("dateOfBirth")}
					/>
				</div>

				{/* Address */}
				<div className="flex flex-col md:flex-row md:justify-between">
					{/* City */}
					<div className="mb-7 space-y-2 md:w-[49%] text-xs">
						<label className="font-semibold text-gray-600 py-2">City</label>
						<input
							className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
							type="text"
							name="city"
							{...register("city")}
						/>
					</div>

					{/* District */}
					<div className="mb-7 space-y-2 md:w-[49%]  text-xs">
						<label className="font-semibold text-gray-600 py-2">District</label>
						<input
							className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
							type="text"
							name="district"
							{...register("district")}
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between">
					{/* Province */}
					<div className="mb-7 space-y-2 md:w-[49%] text-xs">
						<label className="font-semibold text-gray-600 py-2">Province</label>

						<select
							{...register("province")}
							className=" block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10"
						>
							<option value="Province 01">Province 01</option>
							<option value="Province 02">Province 02</option>
							<option value="Province 03">Province 03</option>
							<option value="Province 04">Province 04</option>
							<option value="Province 05">Province 05</option>
							<option value="Province 06">Province 06</option>
							<option value="Province 07">Province 07</option>
						</select>
					</div>

					{/* Country */}
					<div className="mb-3 space-y-2 md:w-[49%]  text-xs">
						<label className="font-semibold text-gray-600 py-2">Country</label>
						{countryList.length === 0 ? (
							<div className=" w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10 flex items-center">
								Loading ...
							</div>
						) : (
							<select
								{...register("country")}
								className=" block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10"
							>
								<option value="Nepal">Nepal</option>
								{countryList.map((country) => (
									<option
										value={country.name.common}
										key={country.name.official}
									>
										{country.name.common}
									</option>
								))}
							</select>
						)}
					</div>
				</div>

				<button
					type="submit"
					className="block w-full lg:w-1/3 bg-indigo-500 text-gray-50 border border-grey-lighter rounded-lg h-12 px-4 pr-10"
				>
					Submit
				</button>
			</form>
		</>
	);
}

function ErrorText({ text }) {
	return (
		<p>
			<span className="text-orange-700">{text}</span>
		</p>
	);
}
