import {
  STATUS_COURSES,
  FETCH_COURSES,
  WATCH_COURSES,
  MESSAGE_COURSES,
} from "types/courses";

export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourses = (courses) => ({
  type: FETCH_COURSES,
  payload: courses,
});

export const watchCourses = (course) => ({
  type: WATCH_COURSES,
  payload: course,
});

export const messageCourses = (message) => ({
  type: MESSAGE_COURSES,
  payload: message,
});
