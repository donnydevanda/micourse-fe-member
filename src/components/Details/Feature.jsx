import Image from "next/image";
import formatThousand from "../../helpers/formatThousand";

export default function Feature(props) {
  return (
    <div
      className="border border-gray-300 bg-white p-6 w-full md:w-1/3"
      style={{ width: 290 }}
    >
      <div className="flex">
        <div className="w-auto">
          <Image src={props.icon} />
        </div>
        <div className="ml-5">
          <span className="text-gray-600 block">{props.meta}</span>
          <span className="text-gray-900 text-3xl">
            {typeof props.value === "number"
              ? formatThousand(props.value)
              : props.value}
          </span>
        </div>
      </div>
    </div>
  );
}
