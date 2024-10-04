import React from "react";
import Robot from "../component/model/Robot";
import Carousel from "../component/banner/Carousel";

const Work = () => {
  return (
    <div className="flex w-full ">
      <div className="w-[100%] relative z-10  xs:w-[50%]"> 
        <Carousel/>
      </div>
      <div className="xs:w-[50%] w-[100%] absolute xs:relative"><Robot /></div>
    </div>
  );
};

export default Work;
