import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseAPI from "../api/course";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import ListClassItem from "../components/ListClassItem";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import {
  statusCourses,
  fetchCourses,
  messageCourse,
} from "../store/actions/courses";

export default function MyClass() {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(statusCourses("loading"));
    CourseAPI.mine()
      .then((res) => dispatch(fetchCourses(res.data)))
      .catch((err) => {
        dispatch(messageCourse(err?.response?.data?.message));
      });
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px4 sm:px-16">
          {COURSES?.status === "loading" && <Loading />}
          {COURSES?.status === "error" && COURSES.message}
          {COURSES?.status === "ok" &&
            (COURSES.total > 0 ? (
              <>
                <PageHeader
                  title="My Class"
                  subtitle="Continue learning to pursue your dream"
                />
                <section className="flex flex-col mt-8">
                  <div className="flex flex-wrap justify-start items-center -mx-4">
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
