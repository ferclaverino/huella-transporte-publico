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
    // TODO remove
    CAR_BIG: { travelMode: google.maps.TravelMode.DRIVING },
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
    transportMode: TransportMode,
    callback: (result: google.maps.DirectionsResult | null) => void
  ) {
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

    this.directionsService.route(request, (result, status) => {
      if (status == "OK") {
        callback(result);
      }
    });
  }
}
