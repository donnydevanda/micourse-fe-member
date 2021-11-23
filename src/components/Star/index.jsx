import Image from "next/image";
import propTypes from "prop-types";
import IconStar from "../../public/images/ic-star.svg";

export default function Star({ className, value, height, width }) {
  const star = [];

  for (let index = 0; index < 5 && index < value; index++) {
    star.push(<Image src={IconStar} width={width} height={height} />);
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
};
