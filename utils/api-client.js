import axios from "axios";

const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    // Authorization: API_KEY,
  },
});

export const clientData = (url) => ({
  fetchByUrl: async () => {
    const { data } = await client.get(`${`${url}`}`, {
      headers: {
        Accept: "application/json",
        //    Authorization: authHeader()
      },
    });
    return data;
  },
});


export const getBlogs= clientData('/posts');