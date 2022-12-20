import axios from "axios";
const BASE_URL = "";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Content_Type: "application/json",
    Accept: "application/json",
  },
});
