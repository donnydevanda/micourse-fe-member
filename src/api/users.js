import axios from "../configs/axios";

const user = {
  login: (credentials) => axios.post("/users/login", credentials),
  register: (payload) => axios.post("/users/register", payload),
  details: () => axios.get("/users"),
};

export default user;
