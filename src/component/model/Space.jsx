import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('src/assets/space_station.glb'); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'Animation')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={4} position={[0, 5, 0]} />; 
};

const Space = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}> 
        <ambientLight intensity={2} />  
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls minDistance={30} maxDistance={30} /> 
      </Canvas>
    </div>
  );
};

export default Space;
