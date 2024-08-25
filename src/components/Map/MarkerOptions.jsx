import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineUpdate } from "react-icons/md";

const MarkerOptions = ({
  handleRemove,
  handleModify,
  customMarkers,
  handleImageChange,
  markerData,
}) => {
  return (
    <div className=" bg-red-300 bottom-3 rounded-lg flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-2 text-xl">
        <div className="flex flex-col text-xs">
          <span>Lat: {markerData.lat}</span>
          <span>Lng: {markerData.lng}</span>
        </div>
        <button
          className="text-red-500 hover:bg-gray-300 rounded-full p-1"
          onClick={handleRemove}
        >
          <IoIosRemoveCircle />
        </button>
        <button
          className="text-blue-500 hover:bg-gray-300 p-1 rounded-full"
          onClick={handleModify}
        >
          <MdOutlineUpdate />
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        {customMarkers.map((marker, i) => (
          <img
            key={i}
            src={marker}
            className="h-8 cursor-pointer border-2 border-transparent hover:border-blue-500"
            alt=""
            onClick={() => handleImageChange(marker)}
          />
        ))}
      </div>
    </div>
  );
};

export default MarkerOptions;
