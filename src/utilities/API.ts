import axios from "axios";

const API = axios.create({
  baseURL: "http://worldtimeapi.org/api"
});

export default API;