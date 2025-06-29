import React from 'react'

const FooterSection = ({title, text1, text2, text3, text4, text5, className}) => {
  return (
    <div className='w-[166px]'>
        <p className={`font-openSans text-eighth font-semibold text-2xl ${className}`}>{title}</p>
        <ul className={`flex flex-col text-eighth font-semibold text-xl gap-y-[32px] font-nunito mt-12  ${className}`}>
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>
            <li>{text4}</li>
            <li>{text5}</li>
        </ul>
    </div>
  )
}

export default FooterSection