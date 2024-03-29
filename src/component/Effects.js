import {
  EffectComposer,
  DepthOfField,
  Bloom,
  GodRays,
} from "@react-three/postprocessing";
import { useState, useEffect } from "react";
import { useThree } from "react-three-fiber";

const Effects = () => {
  const [lights, setLights] = useState(null);
  const { scene } = useThree();

  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) setLights(scene.lights);
  }, [scene.lights]);

  return lights ? (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.04}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={1.9} height={300} />
      {lights.map((light) => (
        <GodRays sun={light.current} />
      ))}
    </EffectComposer>
  ) : null;
};

export default Effects;
