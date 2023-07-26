export const BACKEND_SERVER_URL = 'https://api.portfolly.site';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? BACKEND_SERVER_URL
    : BACKEND_SERVER_URL;