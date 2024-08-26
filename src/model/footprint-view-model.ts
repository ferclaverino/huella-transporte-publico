import { Footprint } from "./footprint";

const locale = "es-AR";

export class FootprintViewModel {
  readonly distanceInKm: string;
  readonly durationInMin: string;
  readonly emissionsInGr: string;
  readonly isVisible: boolean;

  constructor(footprint: Footprint) {
    this.distanceInKm = (footprint.distance / 1000).toLocaleString(locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    this.durationInMin = (footprint.duration / 60).toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    this.emissionsInGr = footprint.emissions.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    this.isVisible = footprint.transportModes.includes(
      footprint.requestedTransportMode
    );
  }
}
