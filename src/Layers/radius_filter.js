import { Circle } from "react-leaflet";

export const RadiusFilter = ({ radiusFilter, setRadiusFilter }) => {
  if (radiusFilter) {
    const { coordinates } = radiusFilter.feature.geometry;
    return (
      <Circle
        center={[coordinates[1], coordinates[0]]}
        radius={radiusFilter.radius * 1000}
        eventHandlers={{
          dblclick: (e) => {
            setRadiusFilter(null);
          },
        }}
      />
    );
  } else {
    return null;
  }
};
