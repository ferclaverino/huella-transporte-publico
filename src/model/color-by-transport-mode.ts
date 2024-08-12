import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const colorByTransport: Record<TransportMode, string> = {
  CAR: "#73b9ff",
  BUS: "#5cb85c",
  SUBWAY: "blue",
  TRAIN: "yellow",
  BIKE: "orange",
  WALK: "green",
};
