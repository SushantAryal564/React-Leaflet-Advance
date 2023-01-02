import L from "leaflet";
import mountainPng from "./../../images/mountain.png";
const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [35, 23],
    iconAnchor: [17, 16],
    toolTipAnchor: [15, -5],
  },
});
export const mountainIcon = new LeafIcon({ iconUrl: mountainPng });
