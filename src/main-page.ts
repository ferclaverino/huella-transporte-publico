import { DirectionsService } from "./directions-service";
import { Footprint, FootprintService } from "./footprint-service";
import { FootprintViewModel } from "./footprint-view-model";
import { MapComponent } from "./map-component";
import { SearchComponent } from "./search-component";

export class MainPage {
  private originPlaceId: string;
  private destinationPlaceId: string;

  constructor(
    private directionsService: DirectionsService,
    private footprintService: FootprintService,
    private mapComponent: MapComponent,
    searchComponent: SearchComponent
  ) {
    searchComponent.onOriginChange((placeId) => this.setOriginPlaceId(placeId));
    searchComponent.onDestinationChange((placeId) =>
      this.setDestinationPlaceId(placeId)
    );
  }

  setOriginPlaceId(originPlaceId: string) {
    this.originPlaceId = originPlaceId;
    this.calculateAndDisplayFootprint();
  }

  setDestinationPlaceId(destinationPlaceId: string) {
    this.destinationPlaceId = destinationPlaceId;
    this.calculateAndDisplayFootprint();
  }

  private calculateAndDisplayFootprint() {
    if (!this.originPlaceId) return;
    if (!this.destinationPlaceId) return;

    this.directionsService
      .routeForCar(this.originPlaceId, this.destinationPlaceId)
      .then((directionsResult) => {
        this.mapComponent.displayRouteForCar(directionsResult);
        this.displayFootprint(
          this.footprintService.getFootprint(directionsResult),
          "car"
        );
      });

    this.directionsService
      .routeForBus(this.originPlaceId, this.destinationPlaceId)
      .then((directionsResult) => {
        this.mapComponent.displayRouteForBus(directionsResult);
        this.displayFootprint(
          this.footprintService.getFootprint(directionsResult),
          "bus"
        );
      });
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
