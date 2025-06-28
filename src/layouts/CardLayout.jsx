import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import Button from '../components/Button'
import Card from '../components/Card'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Card5 from '../assets/card5.png'

const CardLayout = () => {
  return (
    <section className='bg-[#F6F5FF]'>
        <Container className="pt-[100px]">
            <Flex className='gap-6 flex-wrap'>
                <div className='w-[370px]'>
                    <CommonHeading text="What We Do"/>
                    <p className='w-[390px] font-openSans text-[#6C7D93] font-normal text-lg tracking-[0.5px] pt-[20px] pb-[56px]'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                    <Button className="hover:text-primary" text="Contact Us"/>
                </div>
                <Card image={Card1} title="Web design & Dev" classNamep="w-[257px]" text="Social Media has changed the way we interact & do business while creating"/>
                <Card image={Card2} title="Software Dev" classNamep="w-[278px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
                <Card image={Card3} title="Content Writing" classNamep="w-[297px]" text="Social Media has changed the way we interact & do business while creating a new avenue."/>
                <Card image={Card4} title="Digital Marketing" classNamep="w-[297px]" text="Social Media has changed the way we interact & do business while creating a new avenue."/>
                <Card image={Card5} title="Support & Training" classNamep="w-[278px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>

            </Flex>
        </Container>
    </section>
  )
}

export default CardLayout