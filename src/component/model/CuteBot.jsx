import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import cuteBot from '../../assets/cuteBot.glb'

const Model = () => {
  const { scene, animations } = useGLTF(cuteBot); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'Take 001')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={6.5} position={[0, -2.5, 0]} />; 
};

const CuteBot = () => {
  return (
    <div style={{ height: '15rem' }}>
      <Canvas camera={{ position: [-10, 10, -15] }}> 
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls minDistance={10} maxDistance={10} /> 
      </Canvas>
    </div>
  );
};

export default CuteBot;
