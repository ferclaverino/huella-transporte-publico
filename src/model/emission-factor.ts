// TODO include subte, tren (?)
export const enum TransportType {
  CAR = "car",
  BUS = "bus",
}

// emission (in CO2 gr) = factor * distance (in km)
export const emissionFactorByTransport: Record<TransportType, number> = {
  car: 10,
  bus: 100,
};
