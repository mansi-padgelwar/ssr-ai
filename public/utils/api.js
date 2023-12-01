import axios from "axios";

const baseURL = "https://your-api-base-url.com"; 

const api = axios.create({
  baseURL,
});

export const getMetadata = async () => {
  try {
    const response = await api.get("/metadata/v1");
    return response.data;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    throw error;
  }
};
