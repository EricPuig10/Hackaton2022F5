import axios from "axios";
const baseURL = "http://localhost:8080";

export const productServices = {
  getAllProducts() {
    const products = axios.get(baseURL + "/products").then((res) => res.data);
    return products;
  },

  getProductById(id) {
    const product = axios
      .get(baseURL + "/products/" + id)
      .then((res) => res.data);
    return product;
  },


}