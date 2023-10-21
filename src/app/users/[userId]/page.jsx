import axios from "axios";
import React from "react";

const getUser = async id => {
	const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
	return data;
};

export async function generateMetadata({ params }) {
	const user = await getUser(params.userId); // прописаний параметр в строку
	return {
		title: `Users | ${user.firstName}`,
	};
}

const SingleUser = async ({ params }) => {
	const { userId } = params; // прописаний параметр окремо
	const user = await getUser(userId);
	return <div>{user.lastName}</div>;
};

export default SingleUser;
