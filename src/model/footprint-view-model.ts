import { Footprint } from "./footprint";
import { TransportMode } from "./transport-mode";

const locale = "es-AR";

export class FootprintViewModel {
  readonly distanceInKm: string;
  readonly durationInMin: string;
  readonly emissionsInGr: string;
  readonly isVisible: boolean;
  transportModes: TransportMode[];

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
    this.transportModes = this.moveRequestedToFirst(
      footprint.requestedTransportMode,
      footprint.transportModes
    ).filter((t) => this.filterWalkWhenCombined(t, footprint));
  }

  private moveRequestedToFirst(
    requestedTransportMode: TransportMode,
    transportModes: TransportMode[]
  ): TransportMode[] {
    if (!transportModes.includes(requestedTransportMode)) return transportModes;

    return [
      requestedTransportMode,
      ...transportModes.filter((t) => t !== requestedTransportMode),
    ];
  }

  private filterWalkWhenCombined(
    transportMode: TransportMode,
    footprint: Footprint
  ): boolean {
    if (footprint.requestedTransportMode === TransportMode.WALK) return true;
    if (transportMode === TransportMode.WALK) return false;
    return true;
  }
}
