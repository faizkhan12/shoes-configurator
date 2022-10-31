import * as THREE from "three";
import state from "../state";

const ColorPicker = (props) => {
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.backgroundColor
    );
  };
  return (
    <div
      onClick={handleClick}
      style={{
        position: "absolute",
        zIndex: 1,
        display: "flex",
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
      }}
    >
      {/* blue */}
      <div
        style={{
          backgroundColor: "blue",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* yellow */}
      <div
        style={{
          backgroundColor: "yellow",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* green */}
      <div
        style={{
          backgroundColor: "green",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* red */}
      <div
        style={{
          backgroundColor: "#ff0000",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* brown */}
      <div
        style={{
          backgroundColor: "brown",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* black */}
      <div
        style={{
          backgroundColor: "#000",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div>
      {/* white */}
      {/* <div
        style={{
          backgroundColor: "white",
          height: "50px",
          width: "50px",
          cursor: "pointer",
        }}
      ></div> */}
    </div>
  );
};

export default ColorPicker;
