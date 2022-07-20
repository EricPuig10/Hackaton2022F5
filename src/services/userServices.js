import axios from "axios";
const baseURL = "http://localhost:8080";

export const userServices = {
  getUserById(id) {
    const product = axios.get(baseURL + "/users/" + id).then((res) => res.data);
    return product;
  },

};
