"use client"

import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function HomeMap() {
  const map = useRef(null);
  const [lng, setLng] = useState(119.4144549);
  const [lat, setLat] = useState(-5.1347684);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: 'map-contact',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    }).addControl(new mapboxgl.NavigationControl());

  });
    
  return (
    <div className="relative h-full w-full">
      <div id="map-contact" className="map-container absolute top-0 bottom-0 w-full" />
    </div>
  )
}

