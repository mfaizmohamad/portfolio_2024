import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import robotArm from '../../assets/robotArm.glb'

const Model = () => {
  const { scene, animations } = useGLTF(robotArm); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      const action = mixer.clipAction(
        animations.find((clip) => clip.name === 'Track')
      );
      if (action) action.play();

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={0.001} position={[0, 2.1, 0]} />; 
};

const RobotArm = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [-10, 5,-10] }}> 
        <ambientLight intensity={2} />  
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls minDistance={10} maxDistance={10} /> 
      </Canvas>
    </div>
  );
};

export default RobotArm;
