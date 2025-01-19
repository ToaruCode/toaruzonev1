import React from 'react'

export const BackGround = () => {
  return (
    <div className="absolute w-full h-[100vh] overflow-hidden -z-20">
      <div
        className="absolute top-[-16rem] right-[-15rem] w-[50rem] h-[50rem] -z-20 bg-red-300 rounded-full 
      sm:w-[70rem] blur-[5rem] lg:w-[150rem]"
      ></div>
      <div
        className="absolute top-[-15rem] left-[-15rem] w-[35rem] h-[35rem] -z-20 bg-blue-500 rounded-full blur-[7rem]
      sm:w-[50rem] sm:h-[75rem] sm:top-[-35rem] sm:left-[-35rem] sm:blur-[15rem] md:w-[60rem] lg:w-[70rem] xl:w-[90rem] 2xl:w-[100rem]"
      ></div>
      <div className="absolute top-[21rem] right-[-5rem] w-[50rem] h-[50rem] -z-20 bg-orange-50 rounded-full blur-[10rem] lg:w-[70rem] xl:w-[90rem] 2xl:w-[100rem]"></div>
    </div>
  )
}
