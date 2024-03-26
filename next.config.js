/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "https://digitalhippo-production-a297.up.railway.app/",
			},
		],
	},
};

module.exports = nextConfig;