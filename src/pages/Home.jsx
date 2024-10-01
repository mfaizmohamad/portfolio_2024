import React from 'react'
import Space from '../component/model/Space'
import { styles } from "../styles";

const Home = () => {
  return (
    <div className='flex gap-10 w-full'>
      <div className='w-[50%] flex justify-center items-center'>
      <div
        className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start
      gap-5`}
      >
        <div
          className="flex flex-col justify-center items-center
        mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#ffa439]" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#ffa439]">Faiz Mohamad</span>
          </h1>
          <p className={`${styles.heroSubText} t-2 text-white-100`}>
            I am Software Developer <br className="sm:block hidden" />
            Developing user interfaces and web application
          </p>
        </div>
      </div>
      </div>
      <div className='w-[50%]'>
        <Space/>
      </div>
    </div>
  )
}

export default Home
