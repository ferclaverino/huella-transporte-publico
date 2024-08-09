export class DirectionsService {
  private directionsService: google.maps.DirectionsService;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
  }

  routeForCar(
    originPlaceId: string,
    destinationPlaceId: string
  ): Promise<google.maps.DirectionsResult> {
    return this.route(originPlaceId, destinationPlaceId, {
      travelMode: google.maps.TravelMode.DRIVING,
    });
  }

  routeForBus(
    originPlaceId: string,
    destinationPlaceId: string
  ): Promise<google.maps.DirectionsResult> {
    return this.route(originPlaceId, destinationPlaceId, {
      travelMode: google.maps.TravelMode.TRANSIT,
      transitOptions: { modes: [google.maps.TransitMode.BUS] },
      // transitOptions: { modes: [google.maps.TransitMode.SUBWAY] },
      // provideRouteAlternatives: true,
    });
  }

  private route(
    originPlaceId: string,
    destinationPlaceId: string,
    travelModeAndOptions
  ): Promise<google.maps.DirectionsResult> {
    const request = {
      origin: {
        placeId: originPlaceId,
      },
      destination: {
        placeId: destinationPlaceId,
      },
      ...travelModeAndOptions,
    };
    return this.directionsService
      .route(request)
      .catch((e) =>
        console.error("Can´t get route", e)
      ) as Promise<google.maps.DirectionsResult>; // TODO: use null object;
  }
}
