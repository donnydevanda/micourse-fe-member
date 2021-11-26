import { useState, useEffect } from "react";
import CoursesAPI from "api/courses";
import ServerError from "./500";
import Loading from "components/Loading";

export default function Joined({ history, match }) {
  const [state, setState] = useState(() => ({
    isLoading: true,
    isError: false,
    data: {},
  }));

  useEffect(() => {
    CoursesAPI.details(match.params.class)
      .then((res) => setState({ isLoading: false, isError: false, data: res }))
      .catch((err) =>
        setState({ isLoading: false, isError: true, data: null })
      );
  }, [match.params.class]);

  function joining() {
    CoursesAPI.join(match.params.class)
      .then((res) => {
        history.push(`/courses/${match.params.class}`);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "user already take this course")
          history.push(`/courses/${match.params.class}`);
      });
  }

  if (state.isLoading) return <Loading></Loading>;
  if (state.isError) return <ServerError></ServerError>;

  return (
    <section className="h-screen flex flex-col items-center pt-48">
      <img src="/images/illustration-joined.jpg" alt="Success Join" />
      <h1 className="text-3xl text-gray-900 mt-12">Where Are We!?</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        You have sucessfully joined <strong>{state?.data?.name}</strong> course.
      </p>
      <span
        onClick={joining}
        to="/login"
        className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
      >
        Start Learn
      </span>
    </section>
  );
}
