import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'


const ImactText = ({image, title, text, classNamep}) => {
  return (
    <Flex className='gap-x-[35px]'>
        <div className=''>
            <Image className='w[63px] ' src={image}/>
        </div>

        <div className='mt-[-40px]'>
            <h3 className='text-third text-[30px] font-openSans font-bold pt-8'>{title}</h3>
            <p className={`w-[343px] text-fourth font-paprika text-lg font-normal${classNamep}`}>{text}</p>
        </div>
    </Flex>

  )
}

export default ImactText