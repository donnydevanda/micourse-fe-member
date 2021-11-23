import React from "react";
import Modal from "../Modal";

export default function CoursePhoto({ data }) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
      <div className="item relative">
        <figure className="item-image">
          <img
            src={data}
            alt={data}
            className="object-cover h-40 md:h-32 w-full"
          />
        </figure>
        <Modal content={(toggle) => <img src={data} alt={data} />}>
          {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
        </Modal>
      </div>
    </div>
  );
}
