import React from "react";

import Calendar from "./calendar/";
import Footer from "./footer/";
import { useDateRangeState } from "./hooks/use_date_range_state";

import css from "./date_range_picker.module.scss";

export default function DateRangePicker() {
  const data = useDateRangeState({
    fromClass: css.from,
    betweenClass: css.between,
    toClass: css.to,
  });

  return (
    <div className={css.dateRange}>
      <div className={css.dates}>
        <Calendar
          month={data.month}
          year={data.year}
          arrows={["left"]}
          onArrowClick={() => data.changeMonth(-1)}
          onDayClick={data.handleClick("left")}
          getDayClassName={data.getClassName}
        />
        <Calendar
          month={data.getRightDate().month}
          year={data.getRightDate().year}
          arrows={["right"]}
          onArrowClick={() => data.changeMonth(+1)}
          onDayClick={data.handleClick("right")}
          getDayClassName={data.getClassName}
        />
      </div>
      <div className={css.separator}></div>
      <Footer from={data.from} to={data.to} selecting={data.selecting} />
    </div>
  );
}
