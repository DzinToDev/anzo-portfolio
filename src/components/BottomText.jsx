import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const BottomText = () => {

  useGSAP(function(){
    gsap.to('#btm-circles img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className="text-white text-[1.3vw] flex justify-between items-end">
      <div className="">
        <p className="font-[anzo3] leading-4">
          WEB | BRAND IDENTITY <br />
        </p>
        <p className="text-gray-400 font-[anzo2]">BESPOKE DESIGN</p>
      </div>
      <div id="btm-circles" >
        <img className="w-20" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_154,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        <img className="w-20 mt-7" src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_154,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  );
};

export default BottomText;
