import { useEffect, React, useState } from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import { cities } from "./../Data/cities";
import MarkerLayer from "../Layers/marker_layer";
import MarkerLayerWithTooltip from "../Layers/marker_layer_with_tooltips";
import { mountains } from "../Data/highest_points";
import { RadiusFilter } from "../Layers/radius_filter";
import { continents } from "./../Data/continents";
import { ContinentsPolygonLayer } from "../Layers/continents_polygon_layers";
import { FitBoundsToDataControl } from "../controls/fit_data_to_bounds";
import { ShowActiveFiltersControl } from "../controls/show-active-filter";
export const Map = (props) => {
  const [geoFilter, setGeofilter] = useState(null);
  const getGeoFilter = () => geoFilter;
  const [radiusFilter, setRadiusFilter] = useState(null);
  const getRadiusFilter = () => radiusFilter;
  const [asyncCities, setAsyncCities] = useState({ features: [] });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson"
      );
      const data = await response.json();
      setAsyncCities(data);
    };
    fetchData().catch(console.error);
  }, []);
  console.log(asyncCities);
  return (
    <MapContainer center={[0, 0]} zoom={5} scrollWheelZoom={true}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Streets">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="World Imagery">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="National Geography">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" />
        </LayersControl.BaseLayer>
        <MarkerLayer
          features={asyncCities.features}
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
      <FitBoundsToDataControl />
      <ShowActiveFiltersControl
        getFilters={() => ({ geoFilter, radiusFilter })}
      />
    </MapContainer>
  );
};
