import axios from "axios";
const baseURL = "http://localhost:8080";

export const messageServices = {
  getAllMessages() {
    const messages = axios.get(baseURL + "/messages").then((res) => res.data);
    return messages;
  },

  getMessagesByProductId(id) {
    const messages = axios
      .get(baseURL + "/products/" + id + "/messages")
      .then((res) => res.data);
    return messages;
  },

  createMessage(data) {
    const message = axios
      .post(baseURL + "/messages", { ...data, userId: 7 })
      .then((res) => res.data);
    return message;
  },
};
