import React from 'react'

export const BackGround = () => {
  return (
    <>
      <div
        className="absolute top-[-26rem] right-[-28rem] w-[50rem] h-[50rem] -z-20 bg-red-100 rounded-full 
      sm:w-[70rem] blur-[10rem]"
      ></div>
      <div
        className="absolute top-[-15rem] left-[-15rem] w-[35rem] h-[35rem] -z-20 bg-blue-500 rounded-full blur-[7rem]
      sm:w-[75rem] sm:h-[75rem] sm:top-[-35rem] sm:left-[-35rem] sm:blur-[15rem]"
      ></div>
      <div className="absolute top-[21rem] right-[-15rem] w-[50rem] h-[50rem] -z-20 bg-orange-50 rounded-full blur-[10rem] "></div>
    </>
  )
}
