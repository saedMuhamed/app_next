/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

env: {
  API_URL: "https://app-next-zeta.vercel.app/";
}
const apiUrl = process.env.API_URL;
const res = await fetch("http://localhost:4000/tickets", {
  cache: "no-store",
});
