import { Footprint } from "./footprint-service";

export class FootprintViewModel {
  readonly distanceInKm: string;
  readonly emissionsInGr: string;

  constructor(footprint: Footprint) {
    this.distanceInKm = (footprint.distance / 1000).toFixed(2);
    this.emissionsInGr = footprint.emissions.toFixed(2);
  }
}
