import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	addUserData,
	updateUserDetails,
} from "../Store/Slices/userDetailsSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UserForm({ userDetail }) {
	let dispatch = useDispatch();
	let navigate = useNavigate();
	let [countryList, setCountryList] = useState([]);
	let userData = useSelector((state) => state.userDetails.userData);

	let provinceList = [
		"Province 01",
		"Province 02",
		"Province 03",
		"Province 04",
		"Province 05",
		"Province 06",
		"Province 07",
	];

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const resetAsyncForm = useCallback(async () => {
		const result = {
			city: "",
			country: "",
			dateOfBirth: "",
			district: "",
			email: "",
			name: "",
			phone: "",
			province: "",
			userId: "",
		};
		reset(result);
	}, [reset]);

	const onSubmit = (data) => {
		let uniqId =
			"id" +
			Math.random().toString(16).slice(2).toString() +
			"id" +
			new Date().getTime();
		data.userId = uniqId.toString();
		localStorage.setItem("userData", JSON.stringify([...userData, data]));
		dispatch(addUserData(data));
		resetAsyncForm();
		Swal.fire("Awesome!", "User successfully added", "success");
	};

	const handleDataUpdate = (userId) => (data) => {
		data.userId = userId;
		dispatch(updateUserDetails(data));
		resetAsyncForm();
		Swal.fire("Awesome!", "User Data successfully updated", "success");
		navigate("/");
	};

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				setCountryList(
					data.filter((country) => country.name.common !== "Nepal")
				);
			});
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
						defaultValue={userDetail && userDetail.name}
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
						defaultValue={userDetail && userDetail.email}
						type="text"
						name="email"
						{...register("email", {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
					/>

					{errors.email?.message === "Invalid email address" ? (
						<ErrorText text={"The email format seems incorrect"} />
					) : errors.email ? (
						<ErrorText text={"Email is required"} />
					) : null}
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
						defaultValue={userDetail && userDetail.phone}
						type="number"
						name="phone"
						{...register("phone", { required: true, minLength: 7 })}
					/>

					{errors.phone && <ErrorText text={"Minimum 7 digits required 😅"} />}
				</div>

				{/* DOB */}
				<div className="mb-10 space-y-2 w-full text-xs">
					<label className="font-semibold text-gray-600 py-2">
						Date of Birth
					</label>
					<input
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
						type="date"
						name="dateOfBirth"
						defaultValue={userDetail && userDetail.dateOfBirth}
						{...register("dateOfBirth")}
					/>
				</div>

				{/* Address */}
				<div className=" border p-6 mb-8 rounded-lg relative">
					<span className="absolute -top-2 left-2 text-xs font-semibold -p-3 px-3 bg-white">
						Address
					</span>
					<div className="flex flex-col md:flex-row md:justify-between">
						{/* City */}
						<div className="mb-7 space-y-2 md:w-[49%] text-xs">
							<label className="font-semibold text-gray-600 py-2">City</label>
							<input
								className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
								type="text"
								name="city"
								defaultValue={userDetail && userDetail.city}
								{...register("city")}
							/>
						</div>

						{/* District */}
						<div className="mb-7 space-y-2 md:w-[49%]  text-xs">
							<label className="font-semibold text-gray-600 py-2">
								District
							</label>
							<input
								className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
								type="text"
								name="district"
								defaultValue={userDetail && userDetail.district}
								{...register("district")}
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:justify-between ">
						{/* Province */}
						<div className="mb-7 md:mb-2 space-y-2 md:w-[49%] text-xs">
							<label className="font-semibold text-gray-600 py-2">
								Province
							</label>

							<select
								{...register("province")}
								className=" block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10"
								defaultValue={userDetail && userDetail.province}
							>
								{provinceList.map((province) => (
									<option value={province} key={province}>
										{province}
									</option>
								))}
							</select>
						</div>

						{/* Country */}
						<div className=" space-y-2 md:w-[49%]  text-xs">
							<label className="font-semibold text-gray-600 py-2">
								Country
							</label>
							{countryList.length === 0 ? (
								<div className=" w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10 flex items-center">
									Loading ...
								</div>
							) : (
								<select
									{...register("country")}
									className=" block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 pr-10"
									defaultValue={userDetail && userDetail.country}
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
				</div>

				{userDetail ? (
					<div className="flex flex-row gap-5">
						<button
							type="button"
							className="transition block w-full lg:w-1/3 bg-indigo-200 hover:bg-indigo-500 hover:text-gray-50 border border-grey-lighter rounded-lg h-12 px-4"
							onClick={handleSubmit(handleDataUpdate(userDetail.userId))}
						>
							Update
						</button>
						<button
							type="button"
							className="block w-full md:w-fit hover:bg-gray-200 hover:text-gray-700 border border-grey-lighter rounded-lg h-12 px-4"
							onClick={() => window.history.go(-1)}
						>
							Go back
						</button>
					</div>
				) : (
					<button
						type="submit"
						className="block w-full lg:w-1/3 bg-indigo-500 text-gray-50 border border-grey-lighter rounded-lg h-12 px-4 pr-10"
					>
						Submit
					</button>
				)}
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
