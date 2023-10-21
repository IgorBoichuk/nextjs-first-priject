"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Button = () => {
	const router = useRouter();
	return <button onClick={() => router.push("/")}>Go to home</button>;
};
