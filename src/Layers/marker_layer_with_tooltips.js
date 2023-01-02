import { Fragment } from "react";
import { Marker, Tooltip } from "react-leaflet";
import { defaultIcon } from "../Components/icons/defaultIcon";
import { mountainIcon } from "../Components/icons/mountainIcon";
const MarkerLayerWithTooltip = ({ features }) => {
  return features.map((feature) => {
    const { coordinates } = feature.geometry;
    const { name, elevation, continent } = feature.properties;
    return (
      <Fragment>
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={mountainIcon}
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
};
export default MarkerLayerWithTooltip;
