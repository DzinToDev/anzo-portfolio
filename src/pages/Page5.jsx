import React from "react";

const Page5 = () => {
  return (
    <div className="h-screen w-full p-4">
      <div className="w-full h-full bg-black rounded-4xl overflow-hidden relative">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/f1c650_9e12ba46db6147cc811946ee16fa9fc4/1080p/mp4/file.mp4"
        ></video>
       
       <div className="relative z-10 w-1/2 text-white h-full flex flex-col justify-center text-[19vw] leading-56 font-[anzo1] pt-18 pl-10">
        
       <h1>THE</h1>
       <h1>FOCUS</h1>
       </div>
      </div>
    </div>
  );
};

export default Page5;
