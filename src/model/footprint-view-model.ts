import { Footprint } from "./footprint";

export class FootprintViewModel {
  readonly distanceInKm: string;
  readonly emissionsInGr: string;
  readonly durationInMin: string;

  constructor(footprint: Footprint) {
    this.distanceInKm = (footprint.distance / 1000).toFixed(1);
    this.emissionsInGr = footprint.emissions.toFixed(2);
    this.durationInMin = (footprint.duration / 60).toFixed();
  }
}
