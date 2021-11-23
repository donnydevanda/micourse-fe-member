import Link from "next/link";
import RenderItem from "./RenderItem";

export default function index() {
  const data = [
    {
      imageName: "/images/ic-categories/ic-business.svg",
      name: "Business Development",
      total: 241,
    },
    {
      imageName: "/images/ic-categories/ic-content.svg",
      name: "Content Creator",
      total: 1511,
    },
    {
      imageName: "/images/ic-categories/ic-customer.svg",
      name: "Customer Relationship",
      total: 127,
    },
    {
      imageName: "/images/ic-categories/ic-game.svg",
      name: "Game Development",
      total: 289,
    },
    {
      imageName: "/images/ic-categories/ic-product.svg",
      name: "Product Management",
      total: 1311,
    },
    {
      imageName: "/images/ic-categories/ic-travel.svg",
      name: "Travel Guidance",
      total: 303,
    },
  ];
  return (
    <div className="container mx-auto px-4 md:pt-24">
      <div className="flex justify-between item-center">
        <div className="w-auto">
          <p className="text-lg text-gray-600">Category</p>
          <h2 className="text-2xl text-gray-900 whitespace-nowrap">
            Explore & <span className="text-blue-500">Learn</span>
          </h2>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-base whitespace-nowrap">
              View All
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index} />;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </div>
  );
}
