const AppConfig = {
  MAINTENANCE_MODE: Boolean( false),
  MAINTENANCE_MODE_MESSAGE:
    process.env.NEXT_APP_MAINTENANCE_MODE_MESSAGE || 'Site under construction!',
  GITHUB_URL:process.env.NEXT_APP_GITHUB_URL || 'https://github.com/SurajMazar/video-resume'
} as const

export default AppConfig
