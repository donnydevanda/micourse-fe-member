import { Link } from "react-router-dom";

export default function ListClassItem({ data }) {
  return (
    <div className="w-full sm:w-1/4 px-8 sm:px-4 mb-8">
      <div className="item relative">
        <figure className="item-image">
          <img src={data?.thumbnail} alt={data?.name} className="shadow" />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900">{data?.name}</h4>
          <h5 className="text-sm text-gray-600">{data?.level}</h5>
        </div>
        <Link to={`/courses/${data?.id}`} className="link-wrapped" />
      </div>
    </div>
  );
}
