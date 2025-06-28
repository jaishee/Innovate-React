import React from 'react'

const ServiceCard = ({title, text, className}) => {
  return (
    <div className={`text-center relative after:w-[3px] after:h-[132px] after:bg-[#4F585F] after:absolute after:top-[10px] after:-right-[36px] after:content-[""] ${className}`}>
        <h1 className="text-primary text-[64px] font-extrabold font-openSans capitalize">{title}</h1>
        <p className="text-third text-[34px] font-bold font-openSans capitalize">{text}</p>
    </div>
  )
}

export default ServiceCard