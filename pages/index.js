import React, { useRef, useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Image from "../components/Image/Image";
import Loader from "../components/Loader/Loader";
import Logo from "../components/Logo/Logo";
import Row from "../components/Row/Row";
import classes from "../styles/Home.module.css";

export default function Home() {

  const Arr=[{src:"elsa 1.jpeg",title:"Ok!!",id:1}];

  const arr = [
    {
      src:"elsa 1.jpeg",
      title:"First",
      id:1
    },
    {
      src:"elsa 2.jpeg",
      title:"Second",
      id:2
    },
    {
      src:"elsa 3.jpeg",
      title:"Third",
      id:3
    },
    {
      src:"elsa bleda.jpeg",
      title:"Fourth",
      id:4
    },
    {
      src:"jackvanzet.jpeg",
      title:"Fifth",
      id:5
    },
    {
      src:"jackvanzet2.jpeg",
      title:"Sixth",
      id:6
    },
    {
      src:"joshua raichur.jpeg",
      title:"Seven",
      id:7
    },
    {
      src:"julianne swartz.jpeg",
      title:"Eighth",
      id:8
    },
    {
      src:"nile fyfe.jpeg",
      title:"Ninth",
      id:9
    },
    {
      src:"theronin paris.jpeg",
      title:"Tenth",
      id:10
    }
  ]

  const scroller=useRef();

  const [scroll, setScroll] = useState();
  const [width, setWidth] = useState(100);

  useEffect(() => {
    scroller.current.scrollLeft = scroller.current.scrollWidth;
    const Width = scroller.current.scrollLeft;
    widthHandler(Width);
    scroller.current.scrollLeft = 0;
  }, []);

  const widthHandler = (Width) => {
    setWidth(Width);
  };

  const scrollHandler = (event) => {
    setScroll(event.target.scrollLeft);
  };

  return (
    <Card>
      <Row className={classes["first-row"]}>
        <Logo />
        <Loader scroll={scroll} width={width} />
      </Row>
      <div
        className={classes["image-container"]}
        ref={scroller}
        onScroll={scrollHandler}
      >
        {Arr.map(data=><Image src={data.src} key={data.id} title={data.title} />)}
      </div>
    </Card>
  );
}