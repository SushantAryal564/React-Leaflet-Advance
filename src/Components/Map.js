import { React, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { cities } from "./../Data/cities";
import MarkerLayer from "../Layers/marker_layer";
import MarkerLayerWithTooltip from "../Layers/marker_layer_with_tooltips";
import { mountains } from "../Data/highest_points";
export const Map = (props) => {
  const [radiusFilter, setRadiusFilter] = useState(null);
  const getRadiusFilter = () => radiusFilter;
  return (
    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer
        features={cities.features}
        setRadiusFilter={setRadiusFilter}
        getRadiusFilter={getRadiusFilter}
      />
      <MarkerLayerWithTooltip features={mountains.features} />
    </MapContainer>
  );
};
