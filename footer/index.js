import React from "react";

import css from "./footer.module.scss";

export default function Footer({ selecting, from, to }) {
  return (
    <div className={css.footer}>
      <span className={selecting === "from" ? css.active : ""}>
        {from && from.format("MMM D YYYY")}
      </span>
      <span className={css.dash}>-</span>
      <span className={selecting === "to" ? css.active : ""}>
        {to && to.format("MMM D YYYY")}
      </span>
    </div>
  );
}
