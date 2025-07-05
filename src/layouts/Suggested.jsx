import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Suggest from '../components/Suggest'

const Suggested = () => {
  return (
    <section>
      <Container className='pt-[100px] pb-[38px]'>
        <div className='pl-[100px]'>
          <div className='pb-[47px]'>
            <h2 className='text-[#030314] text-[50px] font-bold font-openSans'>You May Also Like</h2>
          </div>
          <Suggest text="Punto Pago Allows Quick And Secure 
            Payments For Services In Panama"/>
          <Suggest text="The User Can Also Replenish A Balance
            Make Remittances "/>
          <Suggest text="The User Can Also Replenish A Balance
            Make Remittances "/>
        </div>
      </Container>


    </section>
  )
}

export default Suggested