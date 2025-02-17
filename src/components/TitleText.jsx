import React from "react";

const TitleText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className=" text-white text-6xl font-[anzo]  h-80 w-fit items-start justify-end flex flex-col">
      <h1>I AM <span className="text-black"> DARK MODE</span>™</h1>
      <h1 className="text-[8vw] font-[anzo]">DESIGNER</h1>
      <h1>TO HIRE</h1>
    </div>
  );
};

export default TitleText;
