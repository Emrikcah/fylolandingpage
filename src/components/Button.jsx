import React from 'react'

const Button = ({text,moveBtn}) => {
  return (
   <button id="btn" className={`font-raleway text-sm font-bold text-liteGrayishBlue bg-brightBlue hover:opacity-90 cursor-pointer py-2.5 ${moveBtn? 'xl:justify-self-start xl:px-[22px]':''}`} type="submit">{text}</button>
  )
}

export default Button