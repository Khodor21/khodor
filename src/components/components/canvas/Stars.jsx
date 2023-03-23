import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Video from "../../../assets/space-to-view-27770.mp4";
const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(0), { raduis: 1.2 });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}> */}
      <video src={Video} autoPlay loop muted />{" "}
      {/* </Suspense>

        <Preload all /> */}
      {/* </Canvas> */}
    </div>
  );
};

export default StarsCanvas;
