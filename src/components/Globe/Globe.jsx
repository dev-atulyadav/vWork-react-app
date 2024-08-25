import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import EarthTexture from "../../assets/Globe/8k_earth_daymap.jpg";

function Globe() {
  const colorMap = useLoader(TextureLoader, EarthTexture);

  return (
    <Canvas>
      <OrbitControls enableZoom={true}/>
      <ambientLight intensity={5} />
      <mesh scale={[2.2,2.2,2.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </Canvas>
  );
}

export default Globe;
