import Link from "next/link";
import Image from "next/image";
import formatThousand from "../../helpers/formatThousand";
import IconPlay from "../../public/images/ic-play.svg";

export default function RenderItem({ item }) {
  return (
    <div className="w-full md:w-1/4 px-4 mb-6">
      <div className="item">
        <figure className="item-image">
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "Course Thumbnail"}
          />
        </figure>
        <div className="item-meta mx-auto mt-4 flex items-center">
          <div className="w-1/5">
            <Link href={`/details/${item?.id}`}>
              <a>
                <Image src={IconPlay} />
              </a>
            </Link>
          </div>
          <div className="w-4/5">
            <h4 className="text-lg text-gray-900">
              {item?.name ?? "Course Name"}
            </h4>
            <h5 className="text-sm my-1 text-gray-600">
              {`Rp.${formatThousand(item?.price) ?? "Course Price"}`}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
