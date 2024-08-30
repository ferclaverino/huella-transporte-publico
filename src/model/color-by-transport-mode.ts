import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const colorByTransport: Record<TransportMode, string> = {
  CAR: "#e11e26",
  CAR_BIG: "#e11e26",
  BUS: "#193662",
  SUBWAY: "#8e173d",
  TRAIN: "#f4ba1b",
  BIKE: "#2c6435",
  WALK: "#a0c539",
};
