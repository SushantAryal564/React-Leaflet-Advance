import { Circle, LayersControl } from "react-leaflet";

export const RadiusFilter = ({ radiusFilter, setRadiusFilter }) => {
  if (radiusFilter) {
    const { coordinates } = radiusFilter.feature.geometry;
    const layer = (
      <Circle
        center={[coordinates[1], coordinates[0]]}
        radius={radiusFilter.radius * 1000}
        eventHandlers={{
          dblclick: (e) => {
            e.originalEvent.view.L.DomEvent.stopPropagation(e);
            setRadiusFilter(null);
          },
        }}
        color={"gray"}
        weight={1}
        fillOpacity={0.4}
      />
    );
    return (
      <LayersControl.Overlay name="Radius Filter">
        {layer}
      </LayersControl.Overlay>
    );
  } else {
    return null;
  }
};
