import BulbMesh from "../component/BulbMesh";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={(6, 3, 0)}
        intensity={2}
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />

      {/* Mesh */}
      <BulbMesh position={[-6, 3, 0]} />
      <BulbMesh position={[0, 3, 0]} />
      <BulbMesh position={[6, 3, 0]} />
    </>
  );
};

export default Lights;
