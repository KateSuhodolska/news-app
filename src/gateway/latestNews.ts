import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getLatestNews = async () =>
  await axios(`${baseUrl}/top-headlines`, {
    params: {
      country: "ua",
      appid: process.env.REACT_APP_ID,
    },
  });
