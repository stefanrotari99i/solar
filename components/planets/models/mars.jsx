"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";

import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useRef } from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/mars.glb");
  const planetRef = useRef();

  // on page load from scale 0 to 0.01
  useGSAP(() => {
    gsap.from(planetRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      ease: "back.out(1.7)",
      duration: 2,
    });
  }, []);

  return (
    <group {...props} dispose={null} ref={planetRef}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mars_Material003_0.geometry}
          material={materials["Material.003"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={791.399}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.atmosphere_Material004_0.geometry}
          material={materials["Material.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1326.769}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/mars.glb");

export function Mars() {
  return (
    <div className="flex w-screen fixed top-0 z-[100]  left-0 h-screen  justify-center items-center">
      <Canvas
        className="relative"
        camera={{ position: [0, 0, 20], fov: 100 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <pointLight position={[10, -10, 10]} />
        <pointLight position={[-10, 10, -10]} />
        <pointLight position={[10, 10, -10]} />

        <pointLight position={[-10, -10, 10]} />
        <directionalLight intensity={0.5} position={[0, 0, 5]} color="white" />
        <Model />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.2}
          enableZoom={false}
          rotateSpeed={0.2}
          panSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}
