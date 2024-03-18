import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, PerspectiveCamera } from '@react-three/drei';
import Cube from './components/cube/Cube';

const App = () => {
  return (
    <Canvas>
      <Cube></Cube>
    </Canvas>
  );
};

export default App;
