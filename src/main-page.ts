import { DirectionsService } from "./services/directions-service";
import { FootprintService } from "./services/footprint-service";
import { MapComponent } from "./components/map-component";
import { SearchComponent } from "./components/search-component";
import { FootPrintComponent } from "./components/footprint-component";
import { TransportMode } from "./model/transport-mode";

export class MainPage {
  private originPlaceId: string;
  private destinationPlaceId: string;

  constructor(
    private directionsService: DirectionsService,
    private footprintService: FootprintService,
    private mapComponent: MapComponent,
    searchComponent: SearchComponent,
    private footPrintComponent: FootPrintComponent
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
      .getRouteForTransportMode(
        this.originPlaceId,
        this.destinationPlaceId,
        TransportMode.CAR
      )
      .then((directionsResult) => {
        this.mapComponent.displayForCar(directionsResult);
        this.footPrintComponent.displayForCar(
          this.footprintService.getFootprint(directionsResult)
        );
      });

    this.directionsService
      .getRouteForTransportMode(
        this.originPlaceId,
        this.destinationPlaceId,
        TransportMode.BUS
      )
      .then((directionsResult) => {
        this.mapComponent.displayForBus(directionsResult);
        this.footPrintComponent.displayForBus(
          this.footprintService.getFootprint(directionsResult)
        );
      });
  }
}
