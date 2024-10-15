import React from 'react'

const Button = ({btnTxt,onClick}) => {
  return (
    <button onClick={onClick} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition duration-300">
  {btnTxt}
  </button>
  )
}

export default Button