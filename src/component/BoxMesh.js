import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

const BoxMesh = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const textureLoader = useLoader(THREE.TextureLoader, "texture/world.jpg");

  const handlePointerDown = (e) => {
    // dont use in production
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const onPointerEnter = (e) => {
    e.object.scale.set(2, 2, 2);
  };

  const onPointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.set(1, 1, 1);
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        map={textureLoader}
        // color="white"
        transparent
        opacity={1}
        // metalness={1}
        roughness={0}
        clearcoat={1}
        transmission={0.7}
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default BoxMesh;
