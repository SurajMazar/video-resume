/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_APP_MAINTENANCE_MODE:process.env.NEXT_APP_MAINTENANCE_MODE,
    NEXT_APP_MAINTENANCE_MODE_MESSAGE:process.env.NEXT_APP_MAINTENANCE_MODE_MESSAGE
  }
}

module.exports = nextConfig
