import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import securityBot from '../../assets/security_bot.glb'

const Model = () => {
  const { scene, animations } = useGLTF(securityBot); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'Take 01')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={0.5} position={[0, 1.5, 0]} />; 
};

const SecurityBot = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}> 
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls minDistance={10} maxDistance={10} /> 
      </Canvas>
    </div>
  );
};

export default SecurityBot;
