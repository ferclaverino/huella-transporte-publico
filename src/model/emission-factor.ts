import { TravelMode } from "./travel-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const emissionFactorByTransport: Record<TravelMode, number> = {
  CAR: 50,
  BUS: 100,
  SUBWAY: 30,
  TRAIN: 20,
  BIKE: 0,
  WALK: 0,
};
