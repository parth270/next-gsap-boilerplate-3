import React, { useState } from "react";
import classes from "./Image.module.css";
import { Tween } from "react-gsap";

const Image = (props) => {

  const [click,setClick]=useState(false);

  const clickHandler=()=>{
    setClick(!click);
  }

  return (
    <Tween
      to={click && {
        width: "100%",
        delay: 0.5,
        duration: 0.6,
        height: "650px",
        top: 0,
        left: 0,
        right: 0,
        margin:"-100 0 0 0",
      }}
      ease="Expo.easeInOut as any"
    >
      <div className={classes.container} onClick={clickHandler} >
        <img src={props.src} alt="" />
        <h1>{props.title}</h1>
      </div>
    </Tween>
  );
};

export default Image;
