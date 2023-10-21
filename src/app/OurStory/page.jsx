"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const submit = data => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input
					{...register("name", {
						required: "Field is required",
						minLength: { value: 4, message: "Must be more than 4" },
					})}
				/>
				<div>{errors?.name && errors.name.message}</div>
				<input {...register("email", { required: true })} />
				<input {...register("password", { required: true })} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
