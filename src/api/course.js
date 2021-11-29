import axios from "../configs/axios";

const course = {
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};

export default course;
