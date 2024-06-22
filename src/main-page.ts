import { DirectionsService } from "./directions-service";
import { Footprint, FootprintService } from "./footprint-service";
import { FootprintViewModel } from "./footprint-view-model";

export class MainPage {
  private readonly map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 17,
    center: { lat: -34.5998703, lng: -58.4002371 },
  });
  private readonly carDirectionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#73b9ff",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
  });
  private readonly busDirectionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#5cb85c",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
  });

  private readonly startElement = document.getElementById(
    "start"
  )! as HTMLInputElement;
  private readonly endElement = document.getElementById(
    "end"
  )! as HTMLInputElement;

  constructor(
    private directionsService: DirectionsService,
    private footprintService: FootprintService
  ) {
    this.carDirectionsRenderer.setMap(this.map);
    this.busDirectionsRenderer.setMap(this.map);
  }

  init() {
    const onChangeHandler = () => {
      this.calculateAndDisplayFootprint();
    };

    this.startElement.addEventListener("change", onChangeHandler);
    this.endElement.addEventListener("change", onChangeHandler);
  }

  private calculateAndDisplayFootprint() {
    const start = this.startElement.value;
    const end = this.endElement.value;

    if (start === end) return;

    this.directionsService.routeForCar(start, end).then((directionsResult) => {
      this.displayRoute(this.carDirectionsRenderer, directionsResult);
      this.displayFootprint(
        this.footprintService.getFootprint(directionsResult),
        "car"
      );
    });

    this.directionsService.routeForBus(start, end).then((directionsResult) => {
      this.displayRoute(this.busDirectionsRenderer, directionsResult);
      this.displayFootprint(
        this.footprintService.getFootprint(directionsResult),
        "bus"
      );
    });
  }

  private displayRoute(
    directionsRender: google.maps.DirectionsRenderer,
    route: google.maps.DirectionsResult
  ) {
    directionsRender.setDirections(route);
  }

  private displayFootprint(footprint: Footprint, elementPrefix: string) {
    const footprintViewModel = new FootprintViewModel(footprint);
    const distanceElement = document.getElementById(
      `${elementPrefix}-distance`
    )!;
    const emisionsElement = document.getElementById(
      `${elementPrefix}-emissions`
    )!;
    distanceElement.innerHTML = footprintViewModel.distanceInKm;
    emisionsElement.innerHTML = footprintViewModel.emissionsInGr;
  }
}
