import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen flex flex-col justify-center items-center text-center mt-[-96px] mx-auto'>
            <p className='text-green-300 font-semibold text-sm md:text-lg'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-white font-bold md:text-6xl sm:text-4xl text-3xl py-2'>Grow with Data</h1>
            <div className='flex gap-2 md:gap-3 md:py-4'>
                <p className='font-semibold md:text-5xl text-lg'>Fast, flexible financing for</p>
                <Typed className='font-semibold md:text-5xl text-lg text-gray-300' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='py-2 text-gray-300 font-semibold md:text-xl text-md px-5'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-green-300 text-black py-2 px-12 rounded-lg font-bold mt-2 md:mt-4 md:py-3 md:px-9 md:text-lg hover:bg-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero