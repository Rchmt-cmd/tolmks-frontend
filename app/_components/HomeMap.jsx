"use client"

import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function HomeMap() {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(119.4144549);
  const [lat, setLat] = useState(-5.1347684);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    }).addControl(new mapboxgl.NavigationControl());

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // const content = `

    //           <div className="bg-white p-6 shadow-md rounded-md" style="overflow-y: auto;max-height: 300px; z-index:1000; width:100%">
    //             <div class="card-content">
    //                 <div class="card-body">
    //                     <img class="card-img img-fluid rounded mb-3" src="https://www.kind.id/wp-content/uploads/2016/01/Slider_Intermark-1.jpg">
    //                     <h5 class="card-title">Intermark Associate Tower</h5>
    //                     <p class="card-text">Jl. Lkr. Tim. No.9, Rw. Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15310</p>
    //                 </div>
    //             </div>
    //           </div>

    //         `
    // const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(content).setMaxWidth("400px");

    // marker.current = new mapboxgl.Marker()
    //     .setLngLat([ 119.4144549, -5.1347684])
    //     .setPopup(popup) // sets a popup on this marker
    //     .addTo(map.current);

  });
    
  return (
      <div id="map-contact" ref={mapContainer} className="map-container absolute top-0 bottom-0 w-full" />
  )
}

