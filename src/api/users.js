import axios from "../configs/axios";

const user = {
  login: (credentials) => axios.post("/users/login", credentials),
  details: () => axios.get("/users"),
};

export default user;
