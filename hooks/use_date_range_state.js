import React from "react";

import moment from "../calendar/moment";

export const useDateRangeState = ({ fromClass, betweenClass, toClass }) => {
  const [selecting, setSelecting] = React.useState("from");
  const [month, setMonth] = React.useState(moment().month());
  const [year, setYear] = React.useState(moment().year());
  const [from, setFrom] = React.useState(moment());
  const [to, setTo] = React.useState(moment().add(7, "days"));

  const getRightDate = () => {
    if (month === 11) return { month: 0, year: year + 1 };
    return { month: month + 1, year: year };
  };

  const changeMonth = (v) => {
    if (month === 0 && v < 0) {
      setMonth(11);
      return setYear(year - 1);
    }
    if (month === 11 && v > 0) {
      setMonth(0);
      return setYear(year + 1);
    }
    return setMonth(month + v);
  };
  const getClassName = (date) => {
    if (date.isSame(from, "day")) return fromClass;
    if (date.isSame(to, "day")) return toClass;
    if (date.isBetween(from, to, "day")) return betweenClass;
    return "";
  };

  const handleClickRight = (e) => {
    const day = Number(e.target.innerText);
    if (selecting === "from") {
      const newFrom = moment()
        .date(day)
        .month(getRightDate().month)
        .year(getRightDate().year);
      newFrom.isAfter(to) && setTo(null);
      setSelecting("to");
      return setFrom(newFrom);
    }

    // to
    const newTo = moment()
      .date(day)
      .month(getRightDate().month)
      .year(getRightDate().year);
    if (newTo.isBefore(from)) {
      setSelecting("to");
      return setFrom(newTo);
    }
    setSelecting("from");
    return setTo(newTo);
  };

  const handleClickLeft = (e) => {
    const day = Number(e.target.innerText);
    // from
    if (selecting === "from") {
      const newFrom = moment().date(day).month(month).year(year);
      newFrom.isAfter(to) && setTo(null);
      setSelecting("to");
      return setFrom(newFrom);
    }

    // to
    const newTo = moment().date(day).month(month).year(year);
    if (newTo.isBefore(from)) {
      setSelecting("to");
      return setFrom(newTo);
    }
    setSelecting("from");
    return setTo(newTo);
  };

  const handleClick = (side) => {
    if (side === "left") {
      return handleClickLeft;
    }
    return handleClickRight;
  };

  return {
    selecting,
    setSelecting,
    month,
    setMonth,
    year,
    setYear,
    from,
    setFrom,
    to,
    setTo,
    getRightDate,
    changeMonth,
    getClassName,
    handleClick,
  };
};
