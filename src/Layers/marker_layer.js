import { Marker, Popup } from "react-leaflet";
import { defaultIcon } from "./../Components/icons/defaultIcon";
import { Button, Card, InputNumber, Space } from "antd";
import { Fragment, useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import L from "leaflet";
const DEFAULTRadius = 3000;
const PopupStatistics = ({ feature, setRadiusFilter }) => {
  const [radius, setRadius] = useState(DEFAULTRadius);
  const { ADM0NAME, NAME, POP_MAX } = feature.properties;
  return (
    <Fragment>
      <Card type="inner" title="Name" style={{ marginTop: 16 }}>
        <b>{`${NAME}, ${ADM0NAME}`}</b>
      </Card>
      <Card type="inner" title="Population" style={{ marginTop: 16 }}>
        <b>{`${POP_MAX}`}</b>
      </Card>
      <Card type="inner" title="Radius" style={{ marginTop: 16 }}>
        <Space>
          <InputNumber
            defaultValue={DEFAULTRadius}
            min={0}
            onChange={(e) => setRadius(e)}
          ></InputNumber>
          <Button
            type="primary"
            shape="round"
            icon={<FilterOutlined />}
            // onClick={() => setRadiusFilter({ feature, radius })}
            onClick={() =>
              setRadiusFilter((prevState) => {
                let newFilter;
                if (prevState) {
                  if (radius === 0) {
                    newFilter = prevState;
                  } else {
                    const sameFeature = prevState.feature === feature;
                    const sameRadiius = prevState.feature === radius;
                    if (!sameFeature || !sameRadiius) {
                      newFilter = { feature, radius };
                    }
                  }
                } else if (radius !== 0) {
                  newFilter = { feature, radius };
                }
                console.log("I am what", newFilter);
                return newFilter;
              })
            }
          >
            Filter by km
          </Button>
        </Space>
      </Card>
    </Fragment>
  );
};
const MarkerLayer = ({ features, setRadiusFilter, getRadiusFilter }) => {
  const radiusFilter = getRadiusFilter();
  let centerPoint;

  if (radiusFilter) {
    const coordinates = radiusFilter.feature.geometry.coordinates;
    centerPoint = L.latLng(coordinates[1], coordinates[0]);
  }
  return features
    .filter((currentFeature) => {
      if (centerPoint) {
        const { coordinates } = currentFeature.geometry;
        const currentPoint = L.latLng(coordinates[1], coordinates[0]);
        return (
          centerPoint.distanceTo(currentPoint) / 1000 < radiusFilter.radius
        );
      } else {
        return true;
      }
    })
    .map((feature) => {
      const { coordinates } = feature.geometry;
      return (
        <Marker
          key={String(coordinates)}
          position={[coordinates[1], coordinates[0]]}
          icon={defaultIcon}
        >
          <Popup>
            <PopupStatistics
              feature={feature}
              setRadiusFilter={setRadiusFilter}
            />
          </Popup>
        </Marker>
      );
    });
};
export default MarkerLayer;
