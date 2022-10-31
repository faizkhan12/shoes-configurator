import { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";

const BulbMesh = (props) => {
  const ref = useRef();
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={5}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default BulbMesh;
