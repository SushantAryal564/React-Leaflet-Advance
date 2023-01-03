import { Fragment } from "react";
import {
  Marker,
  Tooltip,
  useMap,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { mountainIcon } from "../Components/icons/mountainIcon";
const MarkerLayerWithTooltip = ({ features }) => {
  const leafletMap = useMap();

  const layer = features.map((feature) => {
    const { coordinates } = feature.geometry;
    const { name, elevation, continent } = feature.properties;
    return (
      <Fragment>
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={mountainIcon}
          eventHandlers={{
            click: (e) => leafletMap.panTo(e.latlng),
          }}
        >
          <Tooltip>
            <h3>Mt. {name}</h3>
            Continents: <b>{continent}</b>
            <br />
            Elevation: <b>{elevation} m</b>
          </Tooltip>
        </Marker>
      </Fragment>
    );
  });
  return (
    <LayersControl.Overlay checked name="Highest Point">
      <LayerGroup>{layer}</LayerGroup>{" "}
    </LayersControl.Overlay>
  );
};
export default MarkerLayerWithTooltip;
