import { Marker, Popup } from "react-leaflet";
import { defaultIcon } from "./../Components/icons/defaultIcon";
import { Card } from "antd";
const PopupStatistics = () => {
  return (
    <Card type="inner" title="Name">
      Inner Card content
    </Card>
  );
};
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
          <PopupStatistics />
        </Popup>
      </Marker>
    );
  });
};
export default MarkerLayer;
