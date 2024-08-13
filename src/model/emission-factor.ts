import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const emissionFactorByTransport: Record<TransportMode, number> = {
  CAR: 0.5,
  BUS: 0.4,
  SUBWAY: 0.4,
  TRAIN: 0.2,
  BIKE: 0,
  WALK: 0,
  PUBLIC_TRANSPORT: 0,
};
