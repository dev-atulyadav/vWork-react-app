import React from "react";

const MapShapeBtn = ({ props }) => {

  return (
    <div>
      <button
        className="border border-black px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-white hover:border-white duration-500"
        onClick={() => {
          props.handleCurrentPath(props.path);
        }}
      >
        Shape {props.index + 1}
      </button>
    </div>
  );
};

export default MapShapeBtn;
