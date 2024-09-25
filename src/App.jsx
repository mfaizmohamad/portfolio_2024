import React, { useEffect, useRef, useState } from 'react';
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer, Vector3 } from 'three';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Carousel from './component/banner/Carousel';

import drone from './assets/buster_drone.glb'
import StarsCanvas from './component/model/StarCanvas';


const Model = ({ targetPosition }) => {
  const { scene, animations } = useGLTF(drone);
  const mixerRef = useRef();
  const dronePositionRef = useRef(new Vector3(0, 12, 0)); // Keep track of drone's actual position

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'Start_Liftoff')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    // Interpolate the drone's position towards the target
    dronePositionRef.current.lerp(targetPosition, 0.1); // Smoothness factor (0.1 can be adjusted)
    mixerRef.current?.update(delta);

    // Update the position of the model
    scene.position.copy(dronePositionRef.current);
  });

  return <primitive object={scene} scale={1} />;
};

const DroneApp = () => {
  const [droneTargetPosition, setDroneTargetPosition] = useState(new Vector3(0, 10, 0));

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.min(scrollY / maxScroll, 1);

    
    const minYPosition = 10; // Starting point at the top
    const maxYPosition = -14; // Ending point at the bottom

    
    const newYPosition = minYPosition + scrollPercentage * (maxYPosition - minYPosition);

    setDroneTargetPosition(new Vector3(0, newYPosition, 0));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='h-[350vh] relative'>
      <StarsCanvas/>
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 20,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
          camera={{ position: [0, 5, 10] }}
        >
          <ambientLight intensity={2} />  
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Model targetPosition={droneTargetPosition} />
          <OrbitControls minDistance={20} maxDistance={20} />
        </Canvas>
        <Header/>
        <div style={{ height: '100vh' }}><Home /></div>  
        <div style={{ height: '100vh' }}><About /></div> 
        <div style={{ height: '50vh' }}><Carousel/></div>         
        <div style={{ height: '100vh' }}><Work /></div>  
        
      </div>
      <Footer/>   
      
    </>
  );
};

export default DroneApp;
