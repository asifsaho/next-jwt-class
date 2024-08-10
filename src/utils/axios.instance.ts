import axiosCore from "axios";

export const axios = axiosCore.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
