import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'
import Plan1 from '../assets/Plan1.png'
import Plan2 from '../assets/Plan2.png'


const ChoosePlan = () => {
  return (
    <section className=" bg-bgTwo">
        <Container>
            <div className='font-bold font-open text-5xl text-third text-center pt-[100px] pb-[64px]'>Choose The Right Plan</div>
            <Flex className='flex-wrap gap-x-[30px]'>
                <PlanCard title="Basic" image={Plan1} text1="$160" text2=" Responsive Design Dynamic Elements 
                Service Pages Custom Design & Features" />
                <PlanCard title="Professional" image={Plan2} text1="$240" text2=" Responsive Design Dynamic Elements 
                Service Pages Custom Design & Features"/>
                <PlanCard title="Exclusive" image={Plan1} text1="$325" text2=" Responsive Design Dynamic Elements 
                Service Pages Custom Design & Features"/>
            </Flex>
        </Container>
    </section>
  )
}

export default ChoosePlan