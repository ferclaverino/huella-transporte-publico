import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in m)
export const emissionFactorByTransport: Record<TransportMode, number> = {
  CAR: 100,
  CAR_BIG: 1000,
  BUS: 26.41 / 1000,
  SUBWAY: 5.03 / 1000,
  TRAIN: 6.2 / 1000,
  BIKE: 0,
  WALK: 0,
};
