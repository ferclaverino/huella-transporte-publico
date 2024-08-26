import { TransportMode } from "./transport-mode";

export interface Footprint {
  distance: number; // in km
  emissions: number; // in gr Co2
  duration: number; // in seconds
  transportModes: TransportMode[];
}
