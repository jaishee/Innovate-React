import React from 'react'
import CommonHeading from '../components/CommonHeading'
import CommonSubHeading from '../components/CommonSubHeading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ImpactText from '../components/ImactText'
import Icon1 from '../assets/ImpactIcon1.png'
import Icon2 from '../assets/ImpactIcon2.png'
import ElementImg from '../assets/element.png'
import Image from '../components/Image'

const Impact = () => {
  return (
    <section className="">
      
      <Container className='mt-[100px] mb-[16px]'>
          <div className='w-[558px] text-center mx-auto'>
            <CommonHeading className="" text="We create real impact"/>
            <CommonSubHeading className="mt-[23px] mb-[75px]" text="We design, build and support websites and apps for clients worldwide. 
            Create beautiful, eye-catching on-page messages without the need for a developer."/>
          </div>
          <Flex className='gap-x-[144px]'>
            <div className='mb-[178px]'>
              <div>
                <ImpactText classNamep='mt-5' image={Icon1} title="Competitive Analysis" text="With an all-new look and powerful features, 
                Ekko is the best way to ensure success for your business."/>
              </div>
              <div className='mt-[40px]'>
                <ImpactText classNamep="w-[309px]" image={Icon2} title="Strategy and Research" text="Save money and start building your website 
                using the best tools available on the market today."/>
              </div>
            </div>
            <div className='relative w-[491px]'>
              <div className='absolute top-[13px] left-0 w-[227px] h-[273px] bg-[#C4C4C4] 
              rounded-[20px] shadow-[0_20px_60px_rgba(162,169,192,0.25)]'>    
              </div>

              <div className='absolute -top-[10px] left-[255px] w-[161px] h-[140px] bg-[#C4C4C4] 
              rounded-[20px] shadow-[0_20px_60px_rgba(162, 169, 192, 0.25)]'>  
              </div>

              <div className='absolute z-10 top-[150px] w-[310px] h-[264px] left-[185px] bg-[#C4C4C4] 
              rounded-[20px] shadow-[0_20px_60px_rgba(162,169,192,0.25)] border-[6px] border-white'> 
              </div>

              <div className='absolute z-10 top-[55px] w-[130px] h-[105px] left-[382px]'>
                <Image src={ElementImg}/>
              </div>

            </div>
          </Flex>
      </Container>     
    </section>
  )
}

export default Impact