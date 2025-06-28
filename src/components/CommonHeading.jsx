import React from 'react'

const CommonHeading = ({text, className}) => {
  return (
    <h2 className={`text-third text-5xl font-openSans font-bold capitalize ${className}`}>{text}</h2>
  )
}

export default CommonHeading