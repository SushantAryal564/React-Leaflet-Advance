import { GeoJSON } from "react-leaflet";
export const ContinentsPolygonLayer = ({
  data,
  setGeoFilter,
  getGeoFilter,
}) => {
  const geoFilter = getGeoFilter();
  console.log(geoFilter);
  return (
    <GeoJSON
      key="geo-json-layer"
      data={data}
      eventHandlers={{
        click: (e) => setGeoFilter(e.propagatedFrom.feature),
      }}
    ></GeoJSON>
  );
};
