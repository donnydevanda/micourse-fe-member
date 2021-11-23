import Link from "next/link";
import Image from "next/image";
import formatThousand from "../../helpers/formatThousand";

export default function RenderItem({ item }) {
  return (
    <div className="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
      <div className="card relative transition-all duration-300">
        <Image src={item?.imageName} width="64" height="64" />
        <div className="card-meta mt-10">
          <h4 className="text-lg transition-all duration-100 w-1/2">
            {item?.name}
          </h4>
          <h5 className="text-sm transition-all mt-2 duration-500">
            {formatThousand(item?.total)}
          </h5>
        </div>
        <Link href="/">
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
