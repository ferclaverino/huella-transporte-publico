import { emissionFactorByTransport } from "../model/emission-factor";
import { Footprint } from "../model/footprint";
import { TransportMode } from "../model/transport-mode";

// because can´t use google.maps.TravelMode on jest
const enum GoogleTravelMode {
  DRIVING = "DRIVING",
  TRANSIT = "TRANSIT",
  BICYCLING = "BICYCLING",
  WALKING = "WALKING",
}

const enum GoogleVehicleType {
  BUS = "BUS",
  SUBWAY = "SUBWAY",
}

export const emptyFootprint = { distance: 0, emissions: 0 };

export class FootprintService {
  getFootprint(
    directionsResult: google.maps.DirectionsResult | null
  ): Footprint {
    if (!directionsResult) return emptyFootprint;

    console.log(directionsResult);

    return directionsResult.routes[0].legs[0].steps
      .map((step): Footprint => this.toFootprint(step))
      .reduce(
        (sumOfFootprint: Footprint, footprint: Footprint) =>
          this.sumFootprint(sumOfFootprint, footprint),
        { ...emptyFootprint }
      );
  }

  private getTransportMode(step: google.maps.DirectionsStep): TransportMode {
    if (step.travel_mode === GoogleTravelMode.DRIVING.toString()) {
      return TransportMode.CAR;
    } else if (step.travel_mode === GoogleTravelMode.BICYCLING.toString()) {
      return TransportMode.BIKE;
    } else if (step.travel_mode === GoogleTravelMode.WALKING.toString()) {
      return TransportMode.WALK;
    } else {
      if (
        step.transit?.line.vehicle.type === GoogleVehicleType.SUBWAY.toString()
      ) {
        return TransportMode.SUBWAY;
      }
    }

    return TransportMode.BUS;
  }

  private toFootprint(step: google.maps.DirectionsStep) {
    const distance = step.distance ? step.distance.value : 0;
    const transportType = this.getTransportMode(step);
    const emissionFactor = emissionFactorByTransport[transportType];
    const emissions = distance * emissionFactor;
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
