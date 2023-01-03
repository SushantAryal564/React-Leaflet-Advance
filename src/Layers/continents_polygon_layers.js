import { GeoJSON } from "react-leaflet";
export const ContinentsPolygonLayer = ({ data }) => {
  return <GeoJSON key="geo-json-layer" data={data}></GeoJSON>;
};
