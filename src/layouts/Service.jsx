import Container from '../components/Container'
import Flex from '../components/Flex'
import React from 'react'
import ServiceImgOne from '../assets/Service1.png'
import ServiceImgTwo from '../assets/Service2.png'
import ServiceImgThree from '../assets/Service3.png'
import ServiceImgFour from '../assets/Service4.png'
import Image from '../components/Image'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className='bg-bgTwo pb-[100px] -z-20 relative'>
        <Container>
            <Flex className="justify-between relative">
                <div className="w-[270px] absolute -top-[100px] -z-10 left-0">
                    <Image className="w-full" src={ServiceImgOne}/>
                </div>
                <div className="w-[200px] absolute -top-[100px] -z-10 left-[300px]">
                    <Image className="w-full" src={ServiceImgTwo}/>
                </div>
                <div className="w-[340px] absolute -top-[100px] -z-10 left-[530px]">
                    <Image className="w-full" src={ServiceImgThree}/>
                </div>
                <div className="w-[270px] absolute -top-[100px] -z-10 right-0">
                    <Image className="w-full" src={ServiceImgFour}/>
                </div>
            </Flex>
            <Flex className="justify-between mt-[468px]">
                <ServiceCard title="53k" text="Happy client"/>
                <ServiceCard title="10k" text="Projects Done"/>
                <ServiceCard title="120" text="Gets Award"/>
                <ServiceCard title="16" text="operated years"/>
            </Flex>
        </Container>
    </section>
  )
}

export default Service