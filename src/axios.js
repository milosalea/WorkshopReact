import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44386",
});

export default instance;
