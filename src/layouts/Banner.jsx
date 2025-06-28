import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import BannerButton from '../components/BannerButton'

const Banner = () => {
  return (
    <section className='relative bg-banner bg-center bg-no-repeat bg-cover pt-[600px] pb-[385px] w-full'>
      <div className='absolute top-0 left-0 w-full bg-[#6b62c5e6]'>

        <Container className="capitalize">
          <div className='text-center mb-[250px] mt-[250px]'>
            <h1 className='text-[84px] text-[#fafafe] font-bold font-openSans'>you're unique. your website should be too</h1>
            <p className='w-[715px] mx-auto leading-10 text-2xl text-[#E6E5F3] font-normal font-paprika mb-4'>A beautiful website passionately crafted for your small business.  Our Digital Agency development has 
              changed the way brands and businesses use technology for growing business. </p>
            <Flex className="justify-center gap-x-5 ">
              <Button text="get free quote" className="capitalize"/>
              <BannerButton text="learn more" className="capitalize"/>
            </Flex>
          </div>
        </Container>

      </div>

    </section>
  )
}

export default Banner