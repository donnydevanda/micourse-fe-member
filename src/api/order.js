import axios from "../configs/axios";

const course = {
  all: (options = { params: {} }) => axios.get(`/orders`, options),
};

export default course;
