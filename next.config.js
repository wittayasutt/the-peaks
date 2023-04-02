/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
		API_KEY: process.env.API_KEY,
	},
	images: { domains: ['media.guim.co.uk'] },
	reactStrictMode: true,
};

module.exports = nextConfig;
