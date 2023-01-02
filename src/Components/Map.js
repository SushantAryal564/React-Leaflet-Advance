import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { cities } from "./../Data/cities";
import MarkerLayer from "../Layers/marker_layer";
import MarkerLayerWithTooltip from "../Layers/marker_layer_with_tooltips";
import { mountains } from "../Data/highest_points";
export const Map = (props) => {
  return (
    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer features={cities.features} />
      <MarkerLayerWithTooltip features={mountains.features} />
    </MapContainer>
  );
};
