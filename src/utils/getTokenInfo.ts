import jwtDecode from "jwt-decode";

const getTokenInfo = async (token: string) => {
	const { id, role } = jwtDecode(token) as {
		id: string;
		role: string;
	};

	return { id, role };
};

export default getTokenInfo;
