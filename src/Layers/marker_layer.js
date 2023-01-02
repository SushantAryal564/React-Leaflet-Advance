import { Marker, Popup } from "react-leaflet";
import { defaultIcon } from "./../Components/icons/defaultIcon";
const MarkerLayer = ({ features }) => {
  return features.map((feature) => {
    const { coordinates } = feature.geometry;
    return (
      <Marker
        key={String(coordinates)}
        position={[coordinates[1], coordinates[0]]}
        icon={defaultIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customized.
        </Popup>
      </Marker>
    );
  });
};
export default MarkerLayer;
