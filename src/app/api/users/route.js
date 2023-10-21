import { NextResponse } from "next/server";
import { users } from "./users";

export async function GET(req, context) {
	try {
		console.log("GET REQUEST");
		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "data is not find" }, { status: 404 });
	}
}
