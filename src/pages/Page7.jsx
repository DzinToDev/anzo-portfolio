import React from 'react'

const Page7 = () => {
  return (
    <div className='h-screen w-full  p-4'>
        <div className="bg-black rounded-4xl h-full w-full overflow-hidden relative bg-[url(https://static.wixstatic.com/media/f1c650_3b7371d053654d518944cf2e0bac656e~mv2.jpg/v1/fill/w_1426,h_1408,fp_0.32_0.41,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ELEGANT.jpg)] bg-cover bg-center">
     
        <div className="relative z-10  text-white pt-18 pl-10">
          <h1 className=" font-[anzo1] uppercase text-[12vw]">Elegant</h1>
          <p className="text-[1.4vw] ">
          REFINED | SOPHISTICATED | IMPACTFUL
          </p>
          <div className="para-text w-[33vw] font-[anzo3] leading-5 text-zinc-400 text-[1.2vw] mt-2">
            <p>
            Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding.
            </p>
          </div>
          <button className='bg-black text-white border-4 px-28 py-2.5 rounded-full font-[anzo3] text-[1vw] hover:bg-gray-800 mt-8 uppercase' >case study</button>

        </div>
      </div>
    </div>
  )
}

export default Page7