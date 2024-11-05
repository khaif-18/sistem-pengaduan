/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        externalDir: true,
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
};
