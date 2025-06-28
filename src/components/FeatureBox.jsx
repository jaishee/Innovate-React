import React from 'react'
import CommonSubHeading from './CommonSubHeading'
import Flex from './Flex'

const FeatureBox = ({text, className}) => {
  return (
    <Flex className={`relative duration-700 gap-x-[80px] px-7 my-5 rounded-lg transation-.4 hover:bg-white hover:py-[42px] hover:shadow-[10px_30px_60px_#A2A9C026] ${className}`}>
        <div className='relative'>
            <div className='absolute rounded-full top-2px left-0 w-[25px] h-[25px] bg-[#1BBF00]'></div>
            <div className='absolute rounded-full top-2px left-[15px] w-[25px] h-[25px] bg-[#CBC8F0]'></div>
        </div>
        <div>
            <p className="w-[319px] text-fourth text-lg font-normal font-paprika">{text}</p>
        </div>
    </Flex>
  )
}

export default FeatureBox