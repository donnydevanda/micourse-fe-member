import { useEffect } from "react";
import Sidebar from "components/Sidebar";
import formatThousand from "helpers/formatThousand";
import formatDate from "helpers/formatDate";

export default function Transactions() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const items = [
    {
      id: "1",
      slug: "1",
      image: "new-class-1.jpg",
      name: "Start Vlogging",
      levelType: "Beginner",
      price: 280000,
      date: "2020-01-22",
    },
    {
      id: "2",
      slug: "2",
      image: "new-class-2.jpg",
      name: "Football Masterclass",
      levelType: "Beginner",
      price: 280000,
      date: "2020-02-23",
    },
  ];

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="px-16">
        <section className="flex flex-col mt-8">
          <h1 className="text-3xl text-gray-900 mt-12">Transactions</h1>
          <p className="text-lg text-gray-600 mt-4 mb-8 ">
            Keep on Track on what you invested
          </p>
        </section>
        <section className="flex flex-col mt-8">
          {items?.length > 0
            ? items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-start items-center -mx-4 mt-5"
                  >
                    <div className="w-auto px-4" style={{ width: 150 }}>
                      <img
                        src={item?.image ?? ""}
                        alt={item?.name ?? "Class Name"}
                      />
                    </div>
                    <div className="w-3/12 px-4">
                      <h6 className="text-gray-900 text-lg">
                        {item?.name ?? "Class Name"}
                      </h6>
                      <p className="text-gray-600">
                        {item?.levelType ?? "Level"}
                      </p>
                    </div>
                    <div className="w-2/12 px-4">
                      <h6 className="text-gray-900 text-lg">
                        Rp. {formatThousand(item?.price) ?? 0}
                      </h6>
                    </div>
                    <div className="w-2/12 px-4">
                      <h6 className="text-gray-900 text-lg">
                        Rp. {item?.date ? formatDate(item?.date) : "-"}
                      </h6>
                    </div>
                    <div className="w-auto px-4">
                      <button
                        className="bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-200 
          focus:outline-none shadow-inner text-whitepx-6 py-3 mt-4 w-full"
                      >
                        Check Class
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
        </section>
      </main>
    </div>
  );
}
