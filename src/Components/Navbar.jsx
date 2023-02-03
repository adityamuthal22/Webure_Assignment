import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around NavBox items-center'>
      <div>
      <h1 className='text-lg text-pink-600 italic font-bold leading-7'>Webure Technologies</h1>
      </div>
      <div className='flex  gap-7 leading-5 text-gray-500 not-italic  '>
      <h1 className='text-sm font-normal '>About Us</h1>
      <h3 className='text-sm font-normal'>Services</h3>
      <h3 className='text-sm font-normal'>Careers</h3>
      <h3 className='text-sm font-normal'>ROI Stories</h3>
      <h3 className='text-sm font-normal'>Blog</h3>
      <h3 className='text-sm font-normal'>Contact Us</h3>
      </div>
      <div>
        <button className='border Button1'>Let's Talk</button>
      </div>
    </div>
  )
}

export default Navbar