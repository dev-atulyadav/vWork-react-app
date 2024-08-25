import React, { useState, useCallback, useEffect } from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import MarkerOptions from "./MarkerOptions";

const Markers = ({
  markerData,
  currentMarker,
  handleMarkerData,
  index,
  customMarkers,
  isSelected,
  handleIsSelected,
  handleMarkerOptionData,
  handleIsNewMarkers
}) => {
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    handleMarkerOptionData({
      index,
      handleRemove,
      handleModify,
      customMarkers,
      handleImageChange,
      markerData,
      isDraggable
    });
  }, [markerData]);

  const handleMarkerClick = () => {
    handleIsSelected(!isSelected, index);
  };

  const handleRemove = () => {
    handleMarkerData("removeClick", null, index);
    handleSection(false);
  };

  const handleImageChange = (newImage) => {
    console.log(index);

    handleMarkerData("changeImage", newImage, index);
    // handleSection(false);
  };
  const handleSection = (b, index) => {
    handleIsSelected(b);
    console.log(index);
  };
  const handleModify = () => {
    setIsDraggable(true);
    handleIsSelected(false);
    handleIsNewMarkers(false)
  };
  const handleDragEnd = (event, index) => {
    console.log(index);
    setIsDraggable(false);
    handleMarkerData(
      "dragged",
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      index,
      isDraggable
    );
  };

  return (
    <div className="flex justify-center items-center ">
      <AdvancedMarker
        position={markerData}
        draggable={isDraggable}
        onClick={() => {
          handleMarkerClick();
          console.log(index);

          isSelected && handleSection(false, index);
          handleMarkerOptionData({
            index,
            handleRemove,
            handleModify,
            customMarkers,
            handleImageChange,
            markerData,
            isDraggable
          });
        }}
        onDragEnd={(e) => {
          handleDragEnd(e, index);
        }}
      >
        <img
          src={currentMarker}
          className="h-10"
          alt=""
          loading="lazy"
        />
      </AdvancedMarker>
    </div>
  );
};

export default Markers;
