import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? `https://teolia.herokuapp.com/` : "http://localhost:3000"
})