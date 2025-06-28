import React from 'react'

const CommonSubHeading = ({text, className}) => {
  return (
    <p className={`text-fourth text-lg, font-normal font-paprika ${className}`}>{text}</p>
  )
}

export default CommonSubHeading