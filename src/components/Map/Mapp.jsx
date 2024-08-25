import React, { useEffect, useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Markers from "./Markers";
import RedMarker from "../../assets/Markers/red-marker.svg";
import GreenMarker from "../../assets/Markers/green-marker.svg";
import BlackMarker from "../../assets/Markers/black-marker.svg";
import MapShapeBtn from "./MapShapeBtn";
import MarkerOptions from "./MarkerOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Mapp = () => {
  const svgPaths = [
    "M100,300 Q50,250 100,200 Q150,150 100,100 Q50,50 100,0 Q150,50 200,100 Q250,150 300,100 Q350,50 400,100 Q350,150 300,200 Q250,250 300,300 Q350,350 300,400 Q250,350 200,300 Q150,250 100,300 Z",
    "M50,150 Q25,125 50,100 Q75,75 50,50 Q25,25 50,0 Q75,25 100,50 Q125,75 150,50 Q175,25 200,50 Q175,75 150,100 Q125,125 150,150 Q175,175 150,200 Q125,175 100,150 Q75,125 50,150 Z",
    "M0,100 L100,0 L200,100 L100,200 Z",
    "M100,100 L300,100 L200,300 Z",
  ];
  const [customMarkers] = useState([RedMarker, GreenMarker, BlackMarker]);
  const [currentMarker, setCurrentMarker] = useState(RedMarker);
  const [markerData, setMarkerData] = useState([]);
  const [isNewMarker, setIsNewMarker] = useState(true);
  const [currentPath, setCurrentPath] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerOptionsData, setMarkerOptionsData] = useState({});
  const [actionType, setActionType] = useState("clicked");

  const handleCurrentPath = (path) => {
    setCurrentPath(path);
  };
  const handleIsSelected = (b, index) => {
    setIsSelected(b);
    setSelectedMarker(index);
  };
  const handleIsNewMarkers = (b) => {
    setIsNewMarker(b);
  };
  const handleMarkerOptionData = (data) => {
    setMarkerOptionsData(data);
  };
  const handleMarkerData = (actionType, data, index) => {
    console.log(index);

    if (actionType === "dragged") {
      setActionType(actionType);
      const newMarkerData = [...markerData];
      newMarkerData[index] = { ...newMarkerData[index], position: data };
      setMarkerData(newMarkerData);
    } else if (actionType === "removeClick") {
      setMarkerData((prevMarkerData) =>
        prevMarkerData.filter((_, i) => i !== index)
      );
    } else if (actionType === "changeImage") {
      const newMarkerData = [...markerData];
      newMarkerData[index] = { ...newMarkerData[index], image: data };
      setMarkerData(newMarkerData);
    }
  };
  const handleNewMarkers = (e) => {
    if (!isSelected)
      if (markerData.length < 3) {
        handleIsNewMarkers(true);
        setMarkerData((prevMarkerData) => [
          ...prevMarkerData,
          { position: e.detail.latLng, image: currentMarker },
        ]);
      }
    markerData.length == 3 && alertForLimitedMarkers();
  };

  const alertForLimitedMarkers = () => {
    toast.error("You can only add 3 markers.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <ToastContainer />
      <div className="flex justify-center items-center relative">
        <div id="map" className="">
          {currentPath !== "" && (
            <svg width="0" height="0">
              <defs>
                <clipPath id="myClipPath" clipPathUnits="userSpaceOnUse">
                  <path d={currentPath} />
                </clipPath>
              </defs>
            </svg>
          )}
          <APIProvider apiKey={apiKey}>
            <div className="h-96 w-96 flex justify-center items-center gap-8 flex-col relative">
              <Map
                className="h-full w-full absolute"
                defaultCenter={{ lat: 22, lng: 77 }}
                defaultZoom={3}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                mapId={"80b5dc22cc571e41"}
                onClick={
                  actionType !== "dragged"
                    ? handleNewMarkers
                    : () => {
                        setActionType("clicked");
                      }
                }
              />
              {markerData.map((marker, index) => (
                <Markers
                  key={index}
                  index={index}
                  markerData={marker.position}
                  currentMarker={marker.image}
                  handleMarkerData={handleMarkerData}
                  customMarkers={customMarkers}
                  handleIsSelected={handleIsSelected}
                  selectedMarker={selectedMarker}
                  handleMarkerOptionData={handleMarkerOptionData}
                  handleIsNewMarkers={handleIsNewMarkers}
                />
              ))}
            </div>
          </APIProvider>
        </div>
      </div>
      {selectedMarker === markerOptionsData.index && (
        <div>
          <MarkerOptions
            index={markerOptionsData.index}
            handleRemove={markerOptionsData.handleRemove}
            handleModify={markerOptionsData.handleModify}
            customMarkers={customMarkers}
            handleImageChange={markerOptionsData.handleImageChange}
            markerData={markerOptionsData.markerData}
          />
        </div>
      )}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => {
            handleCurrentPath("");
          }}
          className="border border-black px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-white hover:border-white duration-500"
        >
          Default
        </button>
        {svgPaths.map((path, index) => (
          <MapShapeBtn key={index} props={{ path, index, handleCurrentPath }} />
        ))}
      </div>
    </div>
  );
};

export default Mapp;
