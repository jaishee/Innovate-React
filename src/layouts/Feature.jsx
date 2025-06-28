import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonSubHeading from '../components/CommonSubHeading'
import Button from '../components/Button'
import FeatureBox from '../components/FeatureBox'


const Feature = () => {
  return (
    <section className='bg-[#FDFDFD] pt-[100px]'>
      <Container>
          <Flex>
            <div className="w-1/2 pb-[91px]">
              <FeatureBox className='' text="We solve real-world problems through people and the web."/>
              <FeatureBox text="We make processes and technology work efficiently together."/>
              <FeatureBox text="We advance improve existing technology through research and development."/>
              <FeatureBox text="We develop long-lasting and scalable solutions, relationships partnerships."/>
            </div>
            <div className="w-1/2 pl-[186px]">
              <CommonHeading text="Why Choose Us" className=""/>
              <CommonSubHeading className="pt-3 w-[393px] pb-[41px]" text="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
              <Button className="" text="Contact Us"/>
            </div>
          </Flex>
      </Container>
    </section>
  )
}

export default Feature