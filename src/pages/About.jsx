import React from "react";
import Spider from "../component/model/Spider";
import { Tilt } from "react-tilt";
import { motion} from "framer-motion";
import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import BallCanvas from "../component/model/Ball";
import { technologies } from '../constant';

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] 
        shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 0.5,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] 
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[15px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex w-full mb-10">
      <div className="w-[50%]"><Spider /></div>
      <div className="w-[50%]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
      >
        I'm a skilled frontend developer with experience in CSS and JavaScript,
        and expertise in frameworks like React and Three.js. I'm a quick learner
        and collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>


      <div className="mt-20 flex flex-row justify-between gap-5 mr-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className=' mt-10 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div> 
      </div>
    </div>
  );
};

export default About;
