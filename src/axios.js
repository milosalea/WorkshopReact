import axios from "axios";

const instance = axios.create({
  // TODO: Dodati URL adresu od servisa
  baseURL: "https://localhost:44386",
});

export default instance;
