import React from "react";

import moment from "./moment";

export default function WeekDays({ className }) {
  const days = [];
  let day = moment.localeData().firstDayOfWeek();
  let counter = 0;
  while (counter < 7) {
    let label = moment.weekdaysShort()[day];
    days.push(<span key={counter}>{label}</span>);
    day = (day + 1) % 7;
    ++counter;
  }
  return <div className={className}>{days}</div>;
}
