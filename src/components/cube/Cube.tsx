import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, MeshReflectorMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  // Rotate the cube
  useFrame(() => {
    if (!cubeRef.current){
      return;
    }
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <Box ref={cubeRef} args={[3, 3, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="red" />
      </Box>
      </mesh>
  );
};

export default Cube;