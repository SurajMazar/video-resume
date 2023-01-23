/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_APP_MAINTENANCE_MODE:process.env.NEXT_APP_MAINTENANCE_MODE,
    NEXT_APP_MAINTENANCE_MODE_MESSAGE:process.env.NEXT_APP_MAINTENANCE_MODE_MESSAGE,
    NEXT_APP_GITHUB_URL:process.env.NEXT_GITHUB_URL
  }
}

module.exports = nextConfig
