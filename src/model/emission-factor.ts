import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const emissionFactorByTransport: Record<TransportMode, number> = {
  CAR: 100,
  BUS: 10,
  SUBWAY: 1,
  TRAIN: 0.1,
  BIKE: 0.01,
  WALK: 0.001,
  PUBLIC_TRANSPORT: 0,
};
