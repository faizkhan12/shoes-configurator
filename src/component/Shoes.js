import { Suspense } from "react";
import Dragable from "../component/Dragable";
import BoundingBox from "../component/BoundingBox";
import Model from "../component/Model";

const Shoes = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          visible
          position={[4, 4, 0]}
          dims={[6.5, 2, 6]}
          offset={[-0.1, -0.8, -0.1]}
        >
          <Model
            scale={new Array(3).fill(0.01)}
            // position={[0, 20, 0]}
            // rotation={[-0.05, -0.5, 0]}
            path="model/scene.gltf"
          />
        </BoundingBox>
      </Dragable>

      <Dragable transformGroup>
        <BoundingBox
          visible
          position={[-4, 4, 0]}
          dims={[6.5, 2, 6]}
          offset={[-0.1, -0.8, 0.5]}
        >
          <Model
            scale={new Array(3).fill(0.5)}
            // position={[0, 20, 0]}
            rotation={[-0.1, 1, 0]}
            path="model/sandals/scene.gltf"
          />
        </BoundingBox>
      </Dragable>
    </Suspense>
  );
};

export default Shoes;
