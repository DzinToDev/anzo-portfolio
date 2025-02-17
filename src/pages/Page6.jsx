import React from "react";

const Page6 = () => {
  return (
    <div className="h-screen w-full p-4">
      <div className="bg-black rounded-4xl h-full w-full overflow-hidden relative">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4"
        ></video>

        <div className="relative z-10 p-28 text-white pl-20">
          <h1 className=" font-[anzo1] uppercase text-[40vw]">About</h1>

        </div>
      </div>
    </div>
  );
};

export default Page6;
