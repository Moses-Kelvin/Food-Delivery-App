/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

    const withTM = require('next-transpile-modules')(["@geoapify/geocoder-autocomplete", "@geoapify/react-geocoder-autocomplete"]);
module.exports = withTM({})


