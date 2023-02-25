import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


const Subscription = () => {
  return (
    <div className='bg-white py-20 md:px-28 px-8'>
        <div className='md:flex gap-10 justify-around items-center'>
            <div className='w-full rounded-md p-5 flex flex-col justify-center items-center text-center gap-8 shadow-xl mt-20 hover:ease-in-out hover:scale-110 duration-500 hover:bg-gray-200'>
                <img src={single} alt="/" className='max-w-[130px] mx-auto mt-[-70px]'/>
                <p className='font-bold text-2xl'>Single User</p>
                <h1 className='font-extrabold text-6xl'>$149</h1>
                <ul className='w-full font-semibold'>
                    <li className='py-2 border-b border-t border-gray-300'>500 GB Storage</li>
                    <li className='py-2 border-b border-gray-300'>1 user allowed</li>
                    <li className='py-2 border-b border-gray-300'>Send up to 2GB</li>
                </ul>
                <button className='bg-green-300 text-black py-2 px-16 rounded-lg font-bold mt-2 md:mt-4 md:py-2 md:px-9 md:text-lg hover:bg-black hover:text-white'>Start Trial</button>
            </div>
            <div className='w-full bg-gray-200 rounded-md px-5 py-16 flex flex-col justify-center items-center text-center gap-8 shadow-xl mt-20 hover:ease-in-out hover:scale-110 duration-500 hover:bg-gray-200'>
                <img src={double} alt="/" className='max-w-[130px] mx-auto mt-[-70px]'/>
                <p className='font-bold text-2xl'>Single User</p>
                <h1 className='font-extrabold text-6xl'>$200</h1>
                <ul className='w-full font-semibold'>
                    <li className='py-2 border-b border-t border-gray-300'>1000 GB Storage</li>
                    <li className='py-2 border-b border-gray-300'>2 user allowed</li>
                    <li className='py-2 border-b border-gray-300'>Send up to 5GB</li>
                </ul>
                <button className='bg-black text-white py-2 px-16 rounded-lg font-bold mt-2 md:mt-4 md:py-2 md:px-9 md:text-lg hover:bg-white hover:text-black'>Start Trial</button>
            </div>
            <div className='w-full rounded-md p-5 flex flex-col justify-center items-center text-center gap-8 shadow-xl mt-20 hover:ease-in-out hover:scale-110 duration-500 hover:bg-gray-200'>
                <img src={triple} alt="/" className='max-w-[130px] mx-auto mt-[-70px]'/>
                <p className='font-bold text-2xl'>Single User</p>
                <h1 className='font-extrabold text-6xl'>$249</h1>
                <ul className='w-full font-semibold'>
                    <li className='py-2 border-b border-t border-gray-300'>600 GB Storage</li>
                    <li className='py-2 border-b border-gray-300'>3 user allowed</li>
                    <li className='py-2 border-b border-gray-300'>Send up to 8GB</li>
                </ul>
                <button className='bg-green-300 text-black py-2 px-16 rounded-lg font-bold mt-2 md:mt-4 md:py-2 md:px-9 md:text-lg hover:bg-black hover:text-white'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Subscription