import React from 'react'
import Introduction from './slides/introduction'
import AboutMe from './slides/about-me'

const Default: React.FC = () => {
  return (
    <div className='bg-white h-full w-full'>
      <Introduction />
      <AboutMe/>
    </div>
  )
}

export default Default
