import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8300/api/",
  withCredentials: true,
});

export default newRequest;