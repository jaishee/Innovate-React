import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import List from '../components/List'
import FooterSection from '../components/FooterSection'

const Footer = () => {
  return (
    <footer className='bg-footer pt-[126px]'>
        <Container>
            <Flex className='gap-x-[100px]'>
                <div className='w-2/5'>
                   <Image src={Logo} className='pb-[44px]'/> 
                   <p className='font-nunito text-eighth text-lg font-normal w-[449px] pb-[189px]'>Install any demo or template with a single click. You can mix and 
                    match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className='w-1/5 pb-[80px]'>
                    <FooterSection title="Features" text1="Home" text2="About" text3="Benifit" text4="Pricing" text5="Blog"/>
                </div>
                <div className='w-1/5'>
                    <FooterSection title="Products" text1="Task Management" text2="Company Growth" text3="Time Tracking"/>
                </div>
                <div className='w-1/5'>
                    <FooterSection title="Support" text1="Customer Service" text2="Accessibility" text3="Contact Us"/>
                </div>
                
            </Flex>
            <Flex className='justify-between pb-[57px] font-nunito text-xl text-eighth font-normal'>
                <p>@20201 Innovate.All rights reserved.</p>
                <Flex className="gap-x-[60px]">
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                </Flex>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer