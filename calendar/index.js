import React from "react";

import Title from "./title";
import WeekDays from "./week_days";
import Days from "./days";

import css from "./calendar.module.scss";

export default function Calendar({
  month,
  year,
  arrows,
  onArrowClick,
  onDayClick,
  getDayClassName,
}) {
  return (
    <div className={css.calendar}>
      <Title
        className={css.title}
        arrows={arrows}
        onArrowClick={onArrowClick}
        month={month}
        year={year}
      />
      <WeekDays className={css.weekdays} />
      <Days
        className={css.days}
        month={month}
        year={year}
        onDayClick={(e) => onDayClick(e)}
        getDayClassName={getDayClassName}
      />
    </div>
  );
}
