import { TransportMode } from "./transport-mode";

// emission (in CO2 gr) = factor * distance (in km)
export const displayNameByTransport: Record<TransportMode, string> = {
  CAR: "Auto",
  CAR_BIG: "Camioneta",
  BUS: "Colectivo",
  SUBWAY: "Subte",
  TRAIN: "Tren",
  BIKE: "Bicicleta",
  WALK: "Caminando",
};
