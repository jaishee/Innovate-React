import React from 'react'
import Image from '../components/Image'


const PlanCard = ({ title, image, text1, text2, className }) => {
  return (
    <div className={`group relative bg-white shadow-[0px_30px_60px_#A2A9C01A] mb-[100px] rounded-[20px] w-[370px] py-[60px] px-[59px] 
      flex flex-col justify-center items-center text-center duration-300 hover:bg-bgThree ${className}`}>

      <h3 className='group-hover:text-fifth duration-300 text-third text-[30px] font-bold font-nunito'>{title}</h3>
      <div className='bg-[#ECEDF0] group-hover:bg-white/20 duration-300 absolute w-[370px] h-[170px] top-[122px] left-0'>
        <Image src={image} />
      </div>
      <h4 className='text-primary text-5xl font-extrabold font-nunito pt-[216px] pb-3'>{text1}</h4>
      <p className='group-hover:text-sixth duration-300 text-fourth text-[18px] font-normal font-paprika'>{text2}</p>
    </div>
  )
}

export default PlanCard;
