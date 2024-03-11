import axios from "axios";

const BaseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "8c03ab8a93mshf3f6714e9de41d3p1b9b3ejsn617736561c6f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BaseUrl}/${url}`, options);

  return data;
};
