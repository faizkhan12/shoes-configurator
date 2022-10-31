import state from "../state";

const CameraButtons = () => {
  const sets = {
    1: {
      cameraPos: [6, 2, 4],
      target: [4, 0, 0],
      name: "Plane050__0",
    },
    2: {
      cameraPos: [-3, 5, 5],
      target: [-6, 0, 0],
      name: "lambert1",
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          position: "absolute",
          bottom: "30vh",
          left: "40vw",
          zIndex: 1,
          cursor: "pointer",
          height: "30px",
          width: "30px",
          backgroundColor: "#fff",
          textAlign: "center",
          borderRadius: "100%",
          fontSize: "20px",
          fontWeight: "bold",
          opacity: 0.7,
          border: "1px solid #000",
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          position: "absolute",
          bottom: "30vh",
          right: "40vw",
          zIndex: 1,
          cursor: "pointer",
          height: "30px",
          width: "30px",
          backgroundColor: "#fff",
          textAlign: "center",
          borderRadius: "100%",
          fontSize: "20px",
          fontWeight: "bold",
          opacity: 0.7,
          border: "1px solid #000",
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
