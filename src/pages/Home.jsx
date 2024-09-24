import React from 'react'
import Space from '../component/model/Space'

const Home = () => {
  return (
    <div className='flex gap-10 w-full'>
      <div className='w-[50%] flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>Faiz Mohamad</h1>
      </div>
      <div className='w-[50%]'>
        <Space/>
      </div>
    </div>
  )
}

export default Home
