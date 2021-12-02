import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderAPI from "../api/order";
import formatThousand from "../helpers/formatThousand";
import formatDate from "../helpers/formatDate";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import {
  statusOrders,
  fetchOrders,
  messageOrder,
} from "../store/actions/orders";

export default function Transactions() {
  const dispatch = useDispatch();
  const ORDERS = useSelector((state) => state.orders);

  const location = useLocation();

  const params =
    location?.search.length > 0 &&
    location?.search
      ?.substring(1, location.length)
      ?.split?.("&")
      ?.reduce?.((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = value;
        return acc;
      }, {});

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusOrders("loading"));
    OrderAPI.all()
      .then((res) => {
        console.log(res);
        dispatch(fetchOrders(res.data));
      })
      .catch((err) => {
        dispatch(messageOrder(err?.response?.data?.message ?? "error"));
      });
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1">
        <div className="px-4 sm:px-16">
          {ORDERS?.status === "loading" && <Loading />}
          {ORDERS?.status === "error" && ORDERS?.message}
          {ORDERS?.status === "ok" &&
            (params.order_id ? (
              <section className="h-screen flex justify-center flex-col items-center">
                <div className="w-5/12 text-center py-12 mx-auto">
                  <img
                    src={
                      ORDERS?.data[params.order_id]?.metadata?.course_thumbnail
                    }
                    alt="Success join premium class"
                  />
                  <h1 className="text-3xl text-gray-900 mt-12">
                    Congratulations
                  </h1>
                  <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
                    You have successfully joined our{" "}
                    <strong>
                      {ORDERS?.data[params.order_id]?.metadata?.course_name ??
                        "Class Name"}
                    </strong>{" "}
                    class
                  </p>
                  <Link
                    className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
                    to={`/courses/${ORDERS?.data[params.order_id]?.course_id}`}
                  >
                    Mulai Belajar
                  </Link>
                </div>
              </section>
            ) : ORDERS?.total > 0 ? (
              <>
                <section className="flex flex-col mt-8 pl-12 sm:pl-0">
                  <h1 className="text-xl sm:text-4xl text-gray-900 font-medium">
                    Transactions
                  </h1>
                  <p className="text-sm sm:text-lg text-gray-600">
                    Keep on tract what you've invested
                  </p>
                </section>
                <section className="flex flex-wrap flex-col mt-8">
                  {Object.values(ORDERS?.data)?.map?.((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex flex-wrap justify-start items-center -mx-4 mt-5 mb-4 sm:mb-6"
                      >
                        <div className="w-full sm:w-2/12 px-4">
                          <img
                            src={item?.metadata?.course_thumbnail ?? ""}
                            alt={item?.metadata?.course_name ?? "Class name"}
                          />
                        </div>
                        <div className="w-auto sm:w-3/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.metadata?.course_name ?? "Class name"}
                          </h6>
                          <p className="text-gray-600">
                            {item?.metadata?.course_level ?? "Level"}
                          </p>
                        </div>
                        <div className="w-full sm:w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            Rp.
                            {formatThousand(item?.metadata?.course_price ?? 0)}
                          </h6>
                        </div>
                        <div className="w-auto sm:w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.created_at
                              ? formatDate(item?.created_at)
                              : "-"}
                          </h6>
                        </div>
                        <div className="w-3/12 px-4 flex justify-center">
                          {item?.status === "pending" && (
                            <Link
                              className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 focus:outline-none text-white px-6 py-3 mt-0 sm:mt-4 whitespace-no-wrap ml-4 sm:ml-0"
                              to={`/joined/${item?.course_id}`}
                            >
                              Lunasi
                            </Link>
                          )}
                          {item?.status === "success" && (
                            <Link
                              className="bg-gray-250 hover:bg-gray-300 transition-all duration-200 focus:outline-none px-6 py-3 mt-0 sm:mt-4 whitespace-no-wrap ml-4 sm:ml-0"
                              to={`/courses/${item?.course_id}`}
                            >
                              Lihat kelas
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </section>
              </>
            ) : (
              <section className="h-screen flex justify-center flex-col items-center relative z-50 bg-white">
                <div className="w-full sm:w-5/12 text-center py-12 mx-auto">
                  {/* <img
                    src={`${process.env.PUBLIC_URL}/assets/images/illustration-myclass-empty.jpg`}
                    alt="Success join premium class"
                  /> */}
                  <h1 className="text-3xl text-gray-900 mt-12">
                    Time to Invest
                  </h1>
                  <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
                    It seems you don't have any transaction
                  </p>
                  <a
                    className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
                  >
                    Mulai Belajar
                  </a>
                </div>
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}
