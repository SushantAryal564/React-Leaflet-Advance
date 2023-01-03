import { Fragment } from "react";
import { Marker, Tooltip, useMap, LayersControl } from "react-leaflet";
import { defaultIcon } from "../Components/icons/defaultIcon";
import MarkerClusterGroup from "react-leaflet-cluster";
const MarkerLayerWithTooltipCluster = ({ data }) => {
  const leafletMap = useMap();
  const layer = data.features.map((feature) => {
    const { coordinates } = feature.geometry;
    const { name } = feature.properties;
    return (
      <Fragment>
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={defaultIcon}
          eventHandlers={{
            click: (e) => leafletMap.panTo(e.latlng),
          }}
        >
          <Tooltip>
            <h3>Mt. {name}</h3>
          </Tooltip>
        </Marker>
      </Fragment>
    );
  });
  return (
    <LayersControl.Overlay name="Highest Point">
      <MarkerClusterGroup>{layer}</MarkerClusterGroup>
    </LayersControl.Overlay>
  );
};
export default MarkerLayerWithTooltipCluster;
