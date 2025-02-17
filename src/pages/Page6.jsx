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

        <div className="relative w-full z-10 p-28 text-white pl-22 text-center">
          <h1 className=" font-[anzo1] uppercase text-[19vw]">STEP INTO THE FUTURE.</h1>
          <button className='bg-black text-white border-4 px-24 py-2.5 rounded-full font-[anzo3] text-[1vw] hover:bg-gray-800 mt-8 uppercase' >create your legacy</button>
          <p className="mt-20">© 2025 Anzo.Studio™</p>
        </div>
      </div>
    </div>
  );
};

export default Page6;
