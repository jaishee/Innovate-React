import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className='absolute bg-[#160c6d80] top-0 left-0 z-10 w-full bg-secondary py-[18px]'>
        <Container>
            <Flex className='items-center justify-between'>
            
                <img src={Logo} alt="" />
            
                <ul className="flex gap-x-10">
                    <List text="Home"/>
                    <List text="About"/>
                    <List text="Service"/>
                    <List text="Portfolio"/>
                    <List text="Price"/>
                    <List text="Blog"/>
                </ul>
            
                <Button text="Contact Us"/>
        
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar