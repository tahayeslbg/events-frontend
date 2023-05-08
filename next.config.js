/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		API_URL: "http://165.22.64.81:3001",
	},
};

module.exports = nextConfig;
