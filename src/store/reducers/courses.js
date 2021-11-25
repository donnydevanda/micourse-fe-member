import {
  STATUS_COURSES,
  FETCH_COURSES,
  WATCH_COURSES,
  MESSAGE_COURSES,
} from "types/courses";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function courses(state = initialState, action) {
  switch (action.type) {
    case STATUS_COURSES:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_COURSES:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
