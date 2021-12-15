import axios from "axios";

const instance = axios.create({
  // TODO: Dodati URL adresu od servisa
  baseURL: "https://157.90.113.116",
});

export default instance;
