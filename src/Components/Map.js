import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { defaultIcon } from "./icons/defaultIcon";
import { cities } from "./../Data/cities";
const MarkerLayer = ({ features }) => {
  return features.map((feature) => {
    const { coordinates } = feature.geometry;
    return (
      <Marker
        key={String(coordinates)}
        position={[coordinates[1], coordinates[0]]}
        icon={defaultIcon}
      />
    );
  });
};
export const Map = (props) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer features={cities.features} />
    </MapContainer>
  );
};
