/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		API_URL: "http://164.92.228.40",
	},
};

module.exports = nextConfig;
