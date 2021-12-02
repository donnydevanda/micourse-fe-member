import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CourseAPI from "../api/course";
import ServerError from "./500";
import Loading from "../components/Loading";

export default function Joined({ history, match }) {
  const [state, setState] = useState(() => ({
    isLoading: true,
    isError: false,
    data: {},
  }));

  const joining = useCallback(async () => {
    try {
      const details = await CourseAPI.details(match.params.class);
      const joined = await CourseAPI.join(match.params.class);
      if (joined.data.snap_url) window.location.href = joined.data.snap_url;
      else setState({ isLoading: false, isError: false, data: details });
    } catch (error) {}
  }, [match.params.class]);

  useEffect(() => {
    joining();
  }, [joining]);

  if (state.isLoading) return <Loading></Loading>;
  if (state.isError) return <ServerError></ServerError>;

  return (
    <section className="h-screen flex flex-col items-center pt-48">
      <img src="/images/illustration-joined.jpg" alt="Success Join" />
      <h1 className="text-3xl text-gray-900 mt-12">Where Are We!?</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
        You have sucessfully joined <strong>{state?.data?.name}</strong> course.
      </p>
      <Link
        to={`/courses/${match.params.class}`}
        className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
      >
        Start Learn
      </Link>
    </section>
  );
}
