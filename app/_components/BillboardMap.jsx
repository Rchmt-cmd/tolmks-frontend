"use client"
import { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function BillboardMap() {
  const [viewport, setViewport] = useState({
  width: "100%",
  height: "100%",
  // The latitude and longitude of the center of London
  latitude: 51.5074,
  longitude: -0.1278,
  zoom: 10
});
return <ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={"pk.eyJ1IjoiYWRlanVsIiwiYSI6ImNraWF5NHRzZzBncHYycnJ0c3lyNGlhemMifQ.Mybta6gzR48sB8ye-gahJQ"}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
</ReactMapGL>
}