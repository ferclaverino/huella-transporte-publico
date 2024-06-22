export class DirectionsService {
  private directionsService: google.maps.DirectionsService;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
  }

  routeForCar(
    start: string,
    end: string
  ): Promise<google.maps.DirectionsResult> {
    return this.route(start, end, {
      travelMode: google.maps.TravelMode.DRIVING,
    });
  }

  routeForBus(
    start: string,
    end: string
  ): Promise<google.maps.DirectionsResult> {
    return this.route(start, end, {
      travelMode: google.maps.TravelMode.TRANSIT,
      transitOptions: { modes: [google.maps.TransitMode.BUS] },
      // transitOptions: { modes: [google.maps.TransitMode.SUBWAY] },
      // provideRouteAlternatives: true,
    });
  }

  private route(
    start: string,
    end: string,
    travelModeAndOptions
  ): Promise<google.maps.DirectionsResult> {
    const request = {
      origin: {
        query: start,
      },
      destination: {
        query: end,
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
