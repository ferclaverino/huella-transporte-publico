// TODO include subte, tren (?)
export const enum TransportType {
  CAR = "car",
  BUS = "bus",
}

export const emissionFactorByTransport: Record<TransportType, number> = {
  car: 10,
  bus: 100,
};
