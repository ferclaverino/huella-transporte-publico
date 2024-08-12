import { TransportMode } from "../model/transport-mode";

type TravelModeAndTransitMode = {
  travelMode: google.maps.TravelMode;
  transitMode?: google.maps.TransitMode;
};

export class DirectionsService {
  private travelModeAndTransitModeByTransportMode: Record<
    TransportMode,
    TravelModeAndTransitMode
  > = {
    CAR: { travelMode: google.maps.TravelMode.DRIVING },
    BUS: {
      travelMode: google.maps.TravelMode.TRANSIT,
      transitMode: google.maps.TransitMode.BUS,
    },
    SUBWAY: {
      travelMode: google.maps.TravelMode.TRANSIT,
      transitMode: google.maps.TransitMode.SUBWAY,
    },
    TRAIN: {
      travelMode: google.maps.TravelMode.TRANSIT,
      transitMode: google.maps.TransitMode.TRAIN,
    },
    BIKE: { travelMode: google.maps.TravelMode.BICYCLING },
    WALK: { travelMode: google.maps.TravelMode.WALKING },
  };

  private directionsService: google.maps.DirectionsService;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
  }

  getRouteForTransportMode(
    originPlaceId: string,
    destinationPlaceId: string,
    transportMode: TransportMode
  ): Promise<google.maps.DirectionsResult> {
    const travelModeAndTransitMode =
      this.travelModeAndTransitModeByTransportMode[transportMode];

    let request = {
      origin: {
        placeId: originPlaceId,
      },
      destination: {
        placeId: destinationPlaceId,
      },
      travelMode: travelModeAndTransitMode.travelMode,
    };

    if (travelModeAndTransitMode.transitMode) {
      request["transitOptions"] = {
        modes: [travelModeAndTransitMode.transitMode],
      };
    }

    return this.directionsService
      .route(request)
      .catch((e) =>
        console.error("Can´t get route", e)
      ) as Promise<google.maps.DirectionsResult>; // TODO: use null object;
  }
}
