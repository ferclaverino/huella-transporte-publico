import { emissionFactorByTransport, TransportType } from "./footprint-model";

// because can´t use google.maps.TravelMode on jest
const enum GoogleTravelMode {
  DRIVING = "DRIVING",
  TRANSIT = "TRANSIT",
}

export interface Footprint {
  distance: number;
  emissions: number;
}

export class FootprintService {
  getFootprint(directionsResult: google.maps.DirectionsResult): Footprint {
    return directionsResult.routes[0].legs[0].steps
      .filter((step) => this.hasFootprint(step))
      .map((step): Footprint => this.toFootprint(step))
      .reduce(
        (sumOfFootprint: Footprint, footprint: Footprint) =>
          this.sumFootprint(sumOfFootprint, footprint),
        { distance: 0, emissions: 0 }
      );
  }

  private hasFootprint(step: google.maps.DirectionsStep) {
    return (
      step.travel_mode === GoogleTravelMode.DRIVING.toString() ||
      step.travel_mode === GoogleTravelMode.TRANSIT.toString()
    );
  }

  private getTransportType(step: google.maps.DirectionsStep): TransportType {
    if (step.travel_mode === GoogleTravelMode.TRANSIT.toString()) {
      return TransportType.BUS;
    }
    return TransportType.CAR;
  }

  private toFootprint(step: google.maps.DirectionsStep) {
    const distance = step.distance ? step.distance.value : 0;
    const transportType = this.getTransportType(step);
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
