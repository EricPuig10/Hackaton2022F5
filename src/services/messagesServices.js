import axios from "axios";
const baseURL = "http://localhost:8080";

export const messageServices = {
  getAllMessages() {
    const messages = axios.get(baseURL + "/messages").then((res) => res.data);
    return messages;
  },

  getMessagesByProductId(id) {
    const messages = axios
      .get(baseURL + "/messages/" + id + "/products")
      .then((res) => res.data);
    return messages;
  },


}