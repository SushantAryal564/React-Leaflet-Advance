import { createControlComponent } from "@react-leaflet/core";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { Control, DomUtil } from "leaflet";
import { Button } from "antd";
import { BorderOuterOutlined, BorderInnerOutlined } from "@ant-design/icons";
const node = DomUtil.create("div");

Control.FitBoundsToDataControl = Control.extend({
  options: {
    position: "topleft",
  },
  onAdd: function (map) {
    const doFitDataToBounds = () => {
      const latLngs = [];
      map.eachLayer((layer) => {
        const latLng = layer._latlng;
        if (latLng) {
          latLngs.push(latLng);
        }
      });
      map.fitBounds(latLngs);
    };

    const commonProps = {
      className: "leaflet-control-layers",
      style: { width: "33px", height: "33px" },
    };
    // const container = document.getElementById("root");
    // const root = createRoot(container);
    ReactDOM.render(
      <div className="fit-bounds-control-container">
        <Button
          {...commonProps}
          title="Fit bounds to data"
          icon={<BorderInnerOutlined />}
          onClick={() => map.fitWorld()}
        ></Button>
        <Button
          {...commonProps}
          title="Fit bounds to world"
          icon={<BorderOuterOutlined />}
          onClick={() => doFitDataToBounds()}
        ></Button>
      </div>,
      node
    );

    return node;
  },
  onRemove: function (map) {
    unmountComponentAtNode(node);
  },
});

export const FitBoundsToDataControl = createControlComponent(
  (props) => new Control.FitBoundsToDataControl(props)
);
