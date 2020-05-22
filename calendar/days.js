import React from "react";

import moment from "./moment";

export default function Days({
  className,
  month,
  year,
  onDayClick,
  getDayClassName,
}) {
  const m = moment().date(1).month(month).year(year);
  return (
    <div className={className}>
      {Array(m.daysInMonth())
        .fill(0)
        .map(() => {
          const day = m.date();
          const style = day === 1 ? { gridColumn: m.weekday() + 1 } : {};
          const className = getDayClassName(m);
          m.add(1, "day");
          return (
            <div
              key={day}
              className={className}
              style={style}
              onClick={onDayClick}
            >
              {day}
            </div>
          );
        })}
    </div>
  );
}
