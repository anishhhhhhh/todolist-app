import axios from "axios";

const instance = axios.create({
  baseURL: "https://todolist-app-ics.herokuapp.com",
});

export default instance;
