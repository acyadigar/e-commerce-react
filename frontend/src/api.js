import axios from "axios";
const token = localStorage.getItem('token')

const http = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default http;
