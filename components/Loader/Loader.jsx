import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={classes.container}>
      <div
        className={classes.loader}
        style={{ width: `${((props.scroll / props.width) * 100)}%` }}
      />
    </div>
  );
};

export default Loader;
