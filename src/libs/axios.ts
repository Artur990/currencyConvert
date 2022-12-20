import axios from "axios";

const api = "e092c9805a-2c93f6fb06-rn6ops";

export const apiClient = axios.create({
  baseURL: "https://api.fastforex.io/",
  params: {
    api_key: api,
  },
});

// apiClient.get('fetch-all', {params: {from: "USD"}})

// const get = async () =>
//   await axios.get("https://api.fastforex.io/fetch-all?api_key=" + api);
