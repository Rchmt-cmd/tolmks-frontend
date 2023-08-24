"use client"

import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect, useState } from 'react';
import getBillboard from "../libs/getBillboard";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function BillboardMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(119.4589424);
  const [lat, setLat] = useState(-5.1018134);
  const [zoom, setZoom] = useState(12);
  const [geoJsonData, setGeoJsonData] = useState();

  useEffect(() => {
    const geoJson = async () => {
      const result = await getBillboard()
      setGeoJsonData(result.data);
    }

    const loadLocations = geoJson => {
      geoJson.features.forEach((location) => {
        const {geometry, properties} = location
        const {iconSize, locationId, title, description, specification, image} = properties

        let markerElement = document.createElement('div')
        markerElement.className = 'marker'+locationId
        markerElement.id = locationId
        markerElement.style.backgroundImage = 'url(https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png)'
        markerElement.style.backgroundSize = 'cover'
        markerElement.style.width = '50px'
        markerElement.style.height = '50px'

        const imageUrl = '{{url("")}}' + '/' + image

        const content = `

          <div style="overflow-y: auto;max-height: 400px; width:100%">
            <table class="table table-sm mt-2">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>${title}</td>
                </tr>
                <tr>
                  <td>Picture</td>
                  <td><img src="${imageUrl}" loading="lazy" class="img-fluid"></td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>${description}</td>
                </tr>
                <tr>
                  <td>Spesification</td>
                  <td>${specification}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `

        const popUp = new mapboxgl.Popup({
          offset:25
        }).setHTML(content).setMaxWidth("400px")

        new mapboxgl.Marker()
          .setLngLat(geometry.coordinates)
          .setPopup(popUp)
          .addTo(map.current)
      })
    }

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      attributionControl: false,
      zoom: zoom
    }).addControl(new mapboxgl.NavigationControl());
    
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // loadLocations(geoJson)
  });
    
  return (
    <div ref={mapContainer} className="map-container absolute top-0 bottom-0 w-full" />
  )
}

