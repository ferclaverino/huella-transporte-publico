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

    [
      TransportMode.CAR,
      TransportMode.BUS,
      // TransportMode.SUBWAY,
      // TransportMode.TRAIN,
      // TransportMode.BIKE,
      // TransportMode.WALK,
    ].forEach((transportMode: TransportMode) => {
      this.directionsService
        .getRouteForTransportMode(
          this.originPlaceId,
          this.destinationPlaceId,
          transportMode
        )
        .then((directionsResult) => {
          this.mapComponent.displayForTransportMode(
            directionsResult,
            transportMode
          );
          this.footPrintComponent.displayForTransportMode(
            this.footprintService.getFootprint(directionsResult),
            transportMode
          );
        });
    });
  }
}
