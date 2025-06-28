import React from 'react'
import Image from '../components/Image'

const Card = ({image, title, text, classNamep}) => {
  return (
    <div className='group w-[370px] h-[395px] bg-white flex flex-col text-center justify-center items-center px-7 shadow-[0px_30px_60px_#A2A9C01A] rounded-[20px] duration-700 hover:bg-[#6B62C5]'>
       <Image src={image}/>
       <h3 className='text-third text-[30px] font-openSans font-bold pt-8 group-hover:text-white'>{title}</h3>
       <p className={`mt-5 text-fourth font-paprika text-lg font-normal group-hover:text-sixth ${classNamep}`}>{text}</p>
       <a className='text-third text-lg font-openSans font-bold mt-5 relative z-10 after:-z-10 after:absolute after:-top-[5px] 
       after:-right-[14px] after:w-[35px] after:h-[40px] after:content-[""] after:rounded-r-[100px] 
       after:bg-[rgba(27, 191, 0, 0.3)] hover:after:w-[128px] after:duration-500 hover:after:rounded-l-[100px] group-hover:text-seventh group-hover:after:bg-[rgba(255,255,255,0.3)]' href="">Read more</a>    
    </div>
  )
}

export default Card