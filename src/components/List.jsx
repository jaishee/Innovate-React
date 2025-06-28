import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-[#EFF4FA] text-lg font-semibold font-openSans hover:text-[#1BBF00] duration-500 cursor-pointer list-none ${className}`}>
        {text}
    </li>
  )
}

export default List