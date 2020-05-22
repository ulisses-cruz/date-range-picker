import React from "react";
import moment from "moment";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

moment.updateLocale("en", { week: { dow: 1 } });

const DateRangePicker = () => {
  // Variables
  const [selecting, setSelecting] = React.useState("from");
  const [month, setMonth] = React.useState({
    m: moment().month(),
    y: moment().year(),
  });
  const [from, setFrom] = React.useState(moment());
  const [to, setTo] = React.useState(moment().add(7, "days"));

  const months = moment.months();
  const weekDays = [
    ...moment.weekdaysShort().slice(1),
    moment.weekdaysShort()[0],
  ];
  const counter = moment().date(1).month(month.m).year(month.y);

  // Functions
  const changeMonth = (v) => {
    if (month.m === 0 && v < 0) {
      return setMonth({ m: 11, y: month.y - 1 });
    }
    if (month.m === 11 && v > 0) {
      return setMonth({ m: 0, y: month.y + 1 });
    }
    return setMonth({ ...month, m: month.m + v });
  };

  const rightMonth = () => {
    if (month.m === 11) return `${months[0]} ${month.y + 1}`;
    return `${months[month.m + 1]} ${month.y}`;
  };

  const getRightMonth = () => {
    if (month.m === 11) return { m: 0, y: month.y + 1 };
    return { m: month.m + 1, y: month.y };
  };

  const getClassName = (date) => {
    if (date.isSame(from, "day")) return "from";
    if (date.isSame(to, "day")) return "to";
    if (date.isBetween(from, to, "day")) return "between";
    return "";
  };

  const handleClick = (e, side) => {
    const day = Number(e.target.innerText);
    if (side === "left") {
      if (selecting === "from") {
        const newFrom = moment().date(day).month(month.m).year(month.y);
        newFrom.isAfter(to) && setTo(null);
        setSelecting("to");
        return setFrom(newFrom);
      }
      const newTo = moment().date(day).month(month.m).year(month.y);
      if (newTo.isBefore(from)) {
        setSelecting("to");
        return setFrom(newTo);
      }
      setSelecting("from");
      return setTo(newTo);
    }
    if (selecting === "from") {
      const newFrom = moment()
        .date(day)
        .month(getRightMonth().m)
        .year(getRightMonth().y);
      newFrom.isAfter(to) && setTo(null);
      setSelecting("to");
      return setFrom(newFrom);
    }
    const newTo = moment()
      .date(day)
      .month(getRightMonth().m)
      .year(getRightMonth().y);
    if (newTo.isBefore(from)) {
      setSelecting("to");
      return setFrom(newTo);
    }
    setSelecting("from");
    return setTo(newTo);
  };
};
