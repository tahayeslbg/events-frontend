/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		API_URL: "https://stingray-app-49bnu.ondigitalocean.app/",
	},
};

module.exports = nextConfig;
