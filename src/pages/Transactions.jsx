import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderAPI from "../api/order";
import formatThousand from "../helpers/formatThousand";
import formatDate from "../helpers/formatDate";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import Success from "../components/Success";
import EmptyState from "../components/EmptyState";
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
      <Sidebar />
      <main className="flex-1">
        <div className="px-4 sm:px-16">
          {ORDERS?.status === "loading" && <Loading />}
          {ORDERS?.status === "error" && ORDERS?.message}
          {ORDERS?.status === "ok" &&
            (params.order_id ? (
              <Success data={ORDERS?.data[params.order_id]} />
            ) : ORDERS?.total > 0 ? (
              <>
                <PageHeader
                  title="Transactions"
                  subtitle="Keep on tract what you've invested"
                />
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
              <EmptyState />
            ))}
        </div>
      </main>
    </div>
  );
}
