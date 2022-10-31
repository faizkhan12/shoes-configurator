import { useLoader, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useMemo } from "react";

const Background = (props) => {
  const textureLoader = useLoader(THREE.TextureLoader, "texture/shoeshop.jpg");

  const { gl } = useThree();

  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        textureLoader.image.height
      ).fromEquirectangularTexture(gl, textureLoader),
    []
  );

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
