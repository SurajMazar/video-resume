const AppConfig = {
  MAINTENANCE_MODE: Boolean(process.env.NEXT_APP_MAINTENANCE_MODE || false),
  MAINTENANCE_MODE_MESSAGE:process.env.NEXT_APP_MAINTENANCE_MODE_MESSAGE || "Site under construction!"
} as const;

export default AppConfig;
