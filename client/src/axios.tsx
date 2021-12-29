import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  //baseURL: "https://shopee-clone-bhsoft.herokuapp.com/api",
});

export default instance;
