import React from 'react'
import Flex from './Flex'
import Image from '../components/Image'
import SuggestImg from '../assets/Suggest.png'

const Suggest = ({text}) => {
  return (
    <Flex className='pb-[46px]'>
        <div className='rounded-[20px]'>
            <Image src={SuggestImg}/>
        </div>
        <div>
            <div className='pl-[80px] flex'>
                <p className='text-primary text-base font-bold font-quick pr-[36px] leading-[22px]'>News</p>
                <p className='text-fourth text-base font-medium font-quick pr-[8px] leading-[25px]'>By</p>
                <p className='text-fourth text-base font-medium font-quick pr-[24px] leading-[25px]'>Tomas Nikelson</p>
                <p className='text-fourth text-base font-medium font-quick pr-[12px] leading-[25px]'>Posted</p>
                <p className='text-fourth text-base font-medium font-quick leading-[25px]'>5 Hours Ago</p>
            </div>
            <div className='pl-[80px]'>
                <h2 className='w-[504px] text-third text-[30px] font-bold font-openSans leading-[55px] tracking-[-1.5px]'>{text}</h2>
            </div>
            <div className='pl-[80px]'>
            <a href=""
            className='inline-block text-third text-lg font-bold font-openSans mt-5 relative z-10
            after:absolute after:-z-10 after:-top-[5px] after:-right-[14px] after:w-[35px] after:h-[40px]
            after:content-[""] after:rounded-r-[100px] after:bg-[rgba(27,191,0,0.3)] 
            hover:after:w-[128px] hover:after:rounded-l-[100px] hover:after:bg-[rgba(27,191,0,0.3)] 
            after:duration-500'>Read more</a>   
            </div>
        </div>
    </Flex>
  )
}

export default Suggest