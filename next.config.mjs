import i18nConfig from "./next-i18next.config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...i18nConfig,
  reactStrictMode: true,
};

export default nextConfig;
