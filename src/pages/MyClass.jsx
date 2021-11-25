import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseAPI from "api/courses";
import {
  statusCourses,
  fetchCourses,
  messageCourses,
} from "store/actions/courses";
import Sidebar from "components/Sidebar";
import ListClassItem from "components/ListClassItem";
import Loading from "components/Loading";

function EmptyState() {
  return (
    <section className="flex h-screen items-center">
      <div className="w-5/12 text-center py-12 mx-auto">
        <img src="/images/illustration-myclass-empty.jpg" alt="Success Join" />
        <h1 className="text-3xl text-gray-900 mt-12">Time to Invest</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
          You have sucessfully joined <strong></strong> course.
        </p>
        <a
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 
        focus:outline-none shadow-inner text-whitepx-6 py-3 px-12"
        >
          Find Class
        </a>
      </div>
    </section>
  );
}

export default function MyClass() {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(statusCourses("loading"));
    CourseAPI.mine()
      .then((res) => dispatch(fetchCourses(res)))
      .catch((err) => {
        dispatch(messageCourses(err?.response?.data?.message));
      });
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1">
        <div className="px-16">
          {COURSES?.status === "loading" && <Loading />}
          {COURSES?.status === "error" && COURSES.message}
          {COURSES?.status === "ok" &&
            (COURSES.total > 0 ? (
              <>
                <section className="flex flex-col mt-8">
                  <h1 className="text-4xl text-gray-900 font-medium">
                    My Class
                  </h1>
                  <p className="text-lg text-gray-600">
                    Continue learning to pursue your dream
                  </p>
                </section>
                <section className="flex flex-col mt-8">
                  <div className="flex justify-start items-center -mx-4">
                    {Object.values(COURSES.data)?.map?.((item, index) => {
                      return <ListClassItem data={item.course} key={index} />;
                    })}
                  </div>
                </section>
              </>
            ) : (
              <EmptyState />
            ))}
        </div>
      </main>
    </div>
  );
}
