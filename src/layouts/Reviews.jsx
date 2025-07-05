import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import Image from '../components/Image'
import Review1 from '../assets/Review1.png'
import Review2 from '../assets/Review2.png'
import Star from '../assets/Star.png'
import Review from '../assets/Review.png'

const Reviews = () => {
  return (
    <section className='bg-[#F8F8FF]'>
      <Container className=' h-[878px]'>
        <div className='pt-[100px]'>
          <CommonHeading className='text-center' text="What The People Thinks About Us"/>
        </div>
        
        <Flex className='w-full pb-[100px] pt-[79px]'>
          <div className='left-0 pr-[100px] pt-[260px]'>
            <button className='hover:bg-primary bg-[rgba(27,191,0,0.2)] rounded-full w-[64px] h-[64px]
            flex items-center justify-center'>
              <Image className='' src={Review2}/>
            </button>
          </div>
          <div className='w-[842px] relative items-center '>
            <div className='absolute w-[147px] h-[147px] z-10 rounded-full
            shadow-[-10px_30px_50px_#ABAFC74D] left-1/2 -translate-x-1/2'>
              <Image className='rounded-full pt-[1px]' src={Review}/>
            </div>
            <div className='absolute w-[842px] h-[461px] bg-white top-[73px] mx-auto rounded-[20px] 
            shadow-[-15px_30px_50px_rgba(171,175,199,0.302)]'>
              <Image className='absolute z-10 left-1/2 -translate-x-1/2 top-[119px]' src={Star}/>
                <p className='absolute w-[800px] top-[168px] leading-[40px] left-1/2 -translate-x-1/2 text-center font-paprika font-normal text-2xl text-fourth'>Lesser Replenish bearing they’re him cattle kind dominion. You 
                which fill place. Land she’d subdue divided gathering blessed
                seasons it. Without, wherein days.</p>
                <p className='absolute top-[336px] left-1/2 -translate-x-1/2 leading-[25px] text-center text-[#221A2C] text-[25px]
                font-bold font-openSans'>Lukan Depina</p>
                <p className='absolute top-[380px] pb-[56px] leading-[25px] left-1/2 -translate-x-1/2 
                text-center font-paprika font-normal text-lg text-fourth'>Ceo And Head Of Idea</p>
            </div>
          </div>
          <div className=' right-0 pt-[260px] pl-[100px]'>
             <button className='hover:bg-primary bg-[rgba(27,191,0,0.2)] rounded-full w-[64px] h-[64px] flex items-center justify-center'>
              <Image className='' src={Review1}/>
            </button>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Reviews