import Image from 'next/image'
import React from 'react'

export default function Section() {
  return (
    <div className='flex flex-col md:flex-row py-4 w-full  px-4 md:px-12 lg:px-24 '>
        <div className="flex justify-center md:w-1/2 w-full p-6 items-center overflow-hidden">
        <Image src="/62ff2501467761660888321.png" height={200} width={200} alt='Apprentince' className='w-full h-full'/>
        </div>
        <div className="md:w-1/2 w-full px-6 py-8 flex flex-col justify-center">
        <h2 className='text-3xl font-bold text-blue-950'>We Make The Best for Our All Children</h2>
        <p className='text-black font-semibold text-lg py-4'>Our mission is to provide the highest quality education and care for all children, ensuring their well-being and development. We are dedicated to creating a nurturing environment where every child can thrive, learn, and grow, laying the foundation for a bright and successful future</p>
        </div>
    </div>
  )
}
