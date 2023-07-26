export const BACKEND_SERVER_URL = 'https://api.portfolly.site';

export const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? BACKEND_SERVER_URL
    : BACKEND_SERVER_URL;