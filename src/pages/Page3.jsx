import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center">
        <img className="absolute left-1/2 -translate-x-1/2 w-[67vw] z-20" src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1900,h_1093,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
      <video className=" h-[50vh] relative z-10 "
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
        loop
        muted
        autoPlay
        playsInline // for better support in mobile device 
      ></video>
      
    </div>
  );
};

export default Page3;
