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

// TODO support other trains types: https://developers.google.com/maps/documentation/javascript/reference/directions#VehicleType
const enum GoogleVehicleType {
  BUS = "BUS",
  SUBWAY = "SUBWAY",
  HEAVY_RAIL = "HEAVY_RAIL",
}

export const emptyFootprint: Footprint = {
  distance: 0,
  emissions: 0,
  duration: 0,
};

export class FootprintService {
  getFootprint(
    directionsResult: google.maps.DirectionsResult | null
  ): Footprint {
    if (!directionsResult) return emptyFootprint;

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
    }
    return this.getTransportModeForTransit(step);
  }

  private getTransportModeForTransit(
    step: google.maps.DirectionsStep
  ): TransportMode {
    const vehicleType = step.transit?.line.vehicle.type;
    if (vehicleType === GoogleVehicleType.SUBWAY.toString()) {
      return TransportMode.SUBWAY;
    } else if (vehicleType === GoogleVehicleType.HEAVY_RAIL.toString()) {
      return TransportMode.TRAIN;
    }
    return TransportMode.BUS;
  }

  private toFootprint(step: google.maps.DirectionsStep): Footprint {
    const distance = step.distance ? step.distance.value : 0;
    const transportType = this.getTransportMode(step);
    const emissionFactor = emissionFactorByTransport[transportType];
    const emissions = distance * emissionFactor;
    const duration = step.duration ? step.duration.value : 0;
    return {
      distance,
      emissions,
      duration,
    };
  }

  private sumFootprint(
    sumOfFootprint: Footprint,
    footprint: Footprint
  ): Footprint {
    sumOfFootprint.distance += footprint.distance;
    sumOfFootprint.emissions += footprint.emissions;
    sumOfFootprint.duration += footprint.duration;
    return sumOfFootprint;
  }
}
