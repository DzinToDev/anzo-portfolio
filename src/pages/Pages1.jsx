import React, { useRef, useState } from "react";
import TitleText from "../components/TitleText";
import Bottomtext from "../components/Bottomtext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Pages1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    // console.log("hurrey");
    // console.log(e.clientX);

    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        70
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );

    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP (function(){
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      easing:"power4.out",
    })
  },[xVal, yVal])

  return (
    // {mouseMoving}
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="bg-white h-screen p-3.5"
    >
      <div
        id="page1-in"
        className="w-full h-full rounded-4xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2822,h_1580,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover bg-center shadow-lg shadow-gray-700 px-18 py-10 flex flex-col justify-between"
      >
        <img
          className=" w-[5vw]"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt=""
        />

        <TitleText abc={tiltRef} />
        <Bottomtext />
      </div>
    </div>
  );
};

export default Pages1;
