import "./App.css";
import { Canvas, extend } from "react-three-fiber";
import BoxMesh from "./component/BoxMesh";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Orbit from "./component/Orbit";
import Floor from "./component/Floor";
import { Suspense } from "react";
import Background from "./component/Background";
import ColorPicker from "./component/ColorPicker";
import { Physics } from "@react-three/cannon";
import Shoes from "./component/Shoes";
import CameraControls from "./component/CameraControls";
import CameraButtons from "./component/CameraButtons";
import Lights from "./component/Lights";
import Effects from "./component/Effects";
import Loader from "./component/Loader";

extend({ OrbitControls });

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ColorPicker />
      <CameraButtons />

      {/* This is where threejs stuffs goes under */}
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadows
        style={{
          backgroundColor: "black",
        }}
        camera={{
          position: [7, 7, 7],
        }}
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Orbit />

        {/* Light */}
        <Lights />

        {/* 3D objects */}
        <Physics>
          <Shoes />
          {/* <Suspense fallback={null}>
              <BoxMesh position={[-4, 1, 0]} />
            </Suspense>
            <Suspense fallback={null}>
              <BoxMesh position={[4, 1, 0]} />
            </Suspense> */}
          <Floor position={[0, -0.5, 0]} />
        </Physics>

        {/* Background */}
        <Suspense fallback={<Loader />}>
          <Background />
        </Suspense>

        {/* Post-processing */}
        <Effects />
        {/* <axesHelper args={[5]} /> */}
      </Canvas>
    </div>
  );
}

export default App;
