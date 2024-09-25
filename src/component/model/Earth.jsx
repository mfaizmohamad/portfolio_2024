import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import earth from '../../assets/earth.glb'

const Model = () => {
  const { scene, animations } = useGLTF(earth); 
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      // Play the first animation regardless of its name
      const action = animations[0];
      if (action) {
        const clipAction = mixer.clipAction(action);
        clipAction.play();
      }

      return () => mixer.stopAllAction();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} scale={2} position={[0, 1, 0]} />;
};

const Earth = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [-6, 6, 1] }}>
        <ambientLight intensity={3} />  
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Model />
        <OrbitControls minDistance={10} maxDistance={10} />
      </Canvas>
    </div>
  );
};

export default Earth;
