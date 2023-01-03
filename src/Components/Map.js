import { React, useState } from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import { cities } from "./../Data/cities";
import MarkerLayer from "../Layers/marker_layer";
import MarkerLayerWithTooltip from "../Layers/marker_layer_with_tooltips";
import { mountains } from "../Data/highest_points";
import { RadiusFilter } from "../Layers/radius_filter";
import { continents } from "./../Data/continents";
import { ContinentsPolygonLayer } from "../Layers/continents_polygon_layers";

export const Map = (props) => {
  const [geoFilter, setGeofilter] = useState(null);
  const getGeoFilter = () => geoFilter;
  const [radiusFilter, setRadiusFilter] = useState(null);
  const getRadiusFilter = () => radiusFilter;
  return (
    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Streets">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <MarkerLayer
          features={cities.features}
          setRadiusFilter={setRadiusFilter}
          getRadiusFilter={getRadiusFilter}
          getGeoFilter={getGeoFilter}
        />
        <MarkerLayerWithTooltip features={mountains.features} />
        <RadiusFilter
          radiusFilter={radiusFilter}
          setRadiusFilter={setRadiusFilter}
        />
        <ContinentsPolygonLayer
          data={continents}
          setGeoFilter={setGeofilter}
          getGeoFilter={getGeoFilter}
        />
      </LayersControl>
    </MapContainer>
  );
};
