import { emissionFactorByTransport } from "../model/emission-factor";
import { Footprint } from "../model/footprint";
import { TransportMode } from "../model/transport-mode";

// because can´t use google.maps.TravelMode on jest
const enum GoogleTravelMode {
  DRIVING = "DRIVING",
  TRANSIT = "TRANSIT",
}

export const emptyFootprint = { distance: 0, emissions: 0 };

export class FootprintService {
  getFootprint(
    directionsResult: google.maps.DirectionsResult | null
  ): Footprint {
    // add test

    if (!directionsResult) return emptyFootprint;

    return directionsResult.routes[0].legs[0].steps
      .filter((step) => this.hasFootprint(step))
      .map((step): Footprint => this.toFootprint(step))
      .reduce(
        (sumOfFootprint: Footprint, footprint: Footprint) =>
          this.sumFootprint(sumOfFootprint, footprint),
        { ...emptyFootprint }
      );
  }

  private hasFootprint(step: google.maps.DirectionsStep) {
    return (
      step.travel_mode === GoogleTravelMode.DRIVING.toString() ||
      step.travel_mode === GoogleTravelMode.TRANSIT.toString()
    );
  }

  private getTravelType(step: google.maps.DirectionsStep): TransportMode {
    if (step.travel_mode === GoogleTravelMode.TRANSIT.toString()) {
      return TransportMode.BUS;
    }
    return TransportMode.CAR;
  }

  private toFootprint(step: google.maps.DirectionsStep) {
    const distance = step.distance ? step.distance.value : 0;
    const transportType = this.getTravelType(step);
    const emissionFactor = emissionFactorByTransport[transportType];
    const emissions = distance / emissionFactor;
    return {
      distance,
      emissions,
    };
  }

  private sumFootprint(
    sumOfFootprint: Footprint,
    footprint: Footprint
  ): Footprint {
    sumOfFootprint.distance += footprint.distance;
    sumOfFootprint.emissions += footprint.emissions;
    return sumOfFootprint;
  }
}
