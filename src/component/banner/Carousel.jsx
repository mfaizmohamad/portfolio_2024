import React, { useState } from 'react';
import SecurityBot from '../model/SecurityBot';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';
import { Tilt } from 'react-tilt';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { projects } from '../../constant';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  icon,
  iconBg
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 flex gap-5 rounded-2xl sm:w-[900px] ml-10 '
    >
      <div className='relative h-[300px]'>
        <img 
          src={image}
          alt="project_image"
          className='w-full h-full object-cover rounded-2xl' 
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-20 h-10 rounded-2xl flex
            justify-center items-center cursor-pointer gap-2'
          >
            <FaGithub />
            <FaLink />
          </div>
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Change this part to map directly to projects
  const slides = projects.map((project, index) => (
    <ProjectCard key={`project-${index}`} index={index} {...project}/>
  ));

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div id="default-carousel" className="relative w-full h-full ml-10" data-carousel="slide">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'> {/* Fixed class name here */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos on my GitHub page. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="relative h-56 mt-20 overflow-hidden rounded-lg md:h-96">
        {/* Render slides here */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            {slide} {/* Display the slide component */}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30  flex -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button type="button" className="absolute mt-10 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute mt-10 top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
