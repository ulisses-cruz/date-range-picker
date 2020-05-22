import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import moment from "./moment";

export default function Title({
  className,
  arrows = [],
  month,
  year,
  onArrowClick,
}) {
  return (
    <div className={className}>
      {arrows.includes("left") && (
        <span onClick={onArrowClick}>
          <FaAngleLeft />
        </span>
      )}
      <div>
        {moment.months()[month]} {year}
      </div>
      {arrows.includes("right") && (
        <span onClick={onArrowClick}>
          <FaAngleRight />
        </span>
      )}
    </div>
  );
}
