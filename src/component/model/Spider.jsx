import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import spider from '../../assets/spider.glb'

const Model = () => {
  const { scene, animations } = useGLTF(spider); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'ArmatureAction')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />; 
};

const Spider = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, -5, 10] }}>         
        <ambientLight intensity={2} />  
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls minDistance={20} maxDistance={20} /> 
      </Canvas>
    </div>
  );
};

export default Spider;
