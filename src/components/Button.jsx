import React from 'react'

const Button = ({text}) => {
  return (
   <button id="btn" className="text-sm font-bold text-liteGrayishBlue bg-brightBlue hover:opacity-90 cursor-pointer py-2.5" type="submit">{text}</button>
  )
}

export default Button