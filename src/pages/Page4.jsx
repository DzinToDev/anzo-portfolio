import React from "react";

const Page4 = () => {
  return (
    <div className="h-screen w-full p-4">
      <div className="bg-black rounded-4xl h-full w-full overflow-hidden relative">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/f1c650_988626917c6549d6bdc9ae641ad3c444/720p/mp4/file.mp4"
        ></video>

        <div className="relative z-10  text-white pt-18 pl-10">
          <h1 className=" font-[anzo1] uppercase text-[12vw]">About</h1>
          <p className="text-[1.4vw] ">
            INTUITIVE APPROACH | FUTURE-FOCUSED <br /> STRATEGY | UNCOMPROMISING
            DISCIPLINE
          </p>
          <div className="para-text w-[45vw] font-[anzo3] leading-5 text-zinc-400 text-[1.2vw] mt-2">
            <p>
              Anyone can create. Some have the talent to design. <br />
              But who can capture and translate your vision into a lasting
              legacy? <br />
              True design is more than aesthetics; web design is a complete
              extension of your brand - a seamless blend of visual identity,
              your story and messaging, your goals and strategy working together
              to create a powerful digital experience. It’s not a separate piece
              - it’s your brand in action.
            </p>
          </div>
          <button className='bg-black text-white border-4 px-28 py-2.5 rounded-full font-[anzo3] text-[1vw] hover:bg-gray-800 mt-8 uppercase' >Explore</button>

        </div>
      </div>
    </div>
  );
};

export default Page4;
