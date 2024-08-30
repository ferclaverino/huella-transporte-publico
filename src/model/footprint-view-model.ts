import { Footprint } from "./footprint";
import { carTransportModes, TransportMode } from "./transport-mode";

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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    this.isVisible = this.getIsVisible(footprint);
    this.transportModes = this.moveRequestedToFirst(
      footprint.requestedTransportMode,
      footprint.transportModes
    ).filter((t) => this.filterWalkWhenCombined(t, footprint));
  }

  private getIsVisible(footprint: Footprint): boolean {
    if (carTransportModes.includes(footprint.requestedTransportMode))
      return true;
    return footprint.transportModes.includes(footprint.requestedTransportMode);
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
