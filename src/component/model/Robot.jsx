import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import robot from '../../assets/robot.glb'
import Loader from '../loader/Loader';

const Model = () => {
  const { scene, animations } = useGLTF(robot); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'motion')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={3} position={[0, -5, 0]} />; 
};

const Robot = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10] }}> 
       <ambientLight intensity={3} />  
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={<Loader/>}>
           <Model />
        </Suspense>   
        <OrbitControls minDistance={10} maxDistance={10} /> 
      </Canvas>
    </div>
  );
};

export default Robot;
