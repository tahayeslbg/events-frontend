import axios from "axios";
import Cookies from "js-cookie";
const baseUrl =
	process.env.NODE_ENV === "production"
		? process.env.NEXT_PUBLIC_API_URL
		: "http://localhost:3001";

interface IUserRegister {
	name: string;
	surname: string;
	password: string;
	emailAddress: string;
	role: string;
}

interface IUserLogin {
	emailAddress: string;
	password: string;
}

export const register = async (body: IUserRegister) => {
	const res = await axios.post(`${baseUrl}/users/register`, body);
	return res.data;
};

export const login = async (body: IUserLogin) => {
	const res = await axios.post(`${baseUrl}/users/login`, body);
	return res.data;
};

export const getCategories = async () => {
	const categoriesRes = await axios.get(`${baseUrl}/categories`);
	return categoriesRes.data;
};

export const getCategory = async (categoryId: string) => {
	const categoryRes = await axios.get(`${baseUrl}/categories/${categoryId}`);
	return categoryRes.data;
};

export const getEvents = async () => {
	const eventsRes = await axios.get(`${baseUrl}/events`);
	return eventsRes.data;
};

export const searchEvents = async (search: string) => {
	const searchEventsRes = await axios.get(`${baseUrl}/events?search=${search}`);
	return searchEventsRes.data;
};

export const placeEvents = async (place: string) => {
	const placeEventsRes = await axios.get(`${baseUrl}/events?place=${place}`);
	return placeEventsRes.data;
};

export const dateEvents = async (date: string) => {
	const dateEventsRes = await axios.get(`${baseUrl}/events?date=${date}`);
	return dateEventsRes.data;
};

export const categorySearchEvents = async (
	categoryId: string,
	search: string
) => {
	const categorySearchEventsRes = await axios.get(
		`${baseUrl}/categories/${categoryId}?search=${search}`
	);
	return categorySearchEventsRes.data;
};

export const categoryPlaceEvents = async (
	categoryId: string,
	place: string
) => {
	const categoryPlaceEventsRes = await axios.get(
		`${baseUrl}/categories/${categoryId}?place=${place}`
	);
	return categoryPlaceEventsRes.data;
};

export const categoryDateEvents = async (categoryId: string, date: string) => {
	const categoryDateEventsRes = await axios.get(
		`${baseUrl}/categories/${categoryId}?date=${date}`
	);
	return categoryDateEventsRes.data;
};

export const postTicket = async (eventId: string) => {
	const token = Cookies.get("authInfo");
	const postMeTickets = await axios.post(
		`${baseUrl}/users/me/tickets/${eventId}`,
		{
			data: "",
		},
		{
			headers: {
				Authorization: "Bearer " + token,
			},
		}
	);
	return postMeTickets.data;
};

export const deleteTicket = async (eventId: string) => {
	const token = Cookies.get("authInfo");
	const postMeTickets = await axios.delete(
		`${baseUrl}/users/me/tickets/${eventId}`,
		{
			headers: {
				Authorization: "Bearer " + token,
			},
		}
	);
	return postMeTickets.data;
};

export const getMe = async () => {
	const token = Cookies.get("authInfo");

	const getMe = await axios.get(`${baseUrl}/users/me`, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});

	return getMe.data;
};
