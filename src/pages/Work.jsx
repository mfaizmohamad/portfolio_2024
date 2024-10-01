import React from "react";
import Robot from "../component/model/Robot";
import Carousel from "../component/banner/Carousel";

const Work = () => {
  return (
    <div className="flex w-full ">
      <div className="w-[50%]"> 
        <Carousel/>
      </div>
      <div className="w-[50%]"><Robot /></div>
    </div>
  );
};

export default Work;
