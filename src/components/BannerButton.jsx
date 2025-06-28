import React from 'react'

const BannerButton = ({text, className}) => {
  return (
    <button className={`py-[14px] px-7 bg-transparent rounded-[100px] text-lg text-white font-semibold font-openSans border hover:bg-primary border-primary duration-300  ${className}`}>{text}</button>
  )
}

export default BannerButton