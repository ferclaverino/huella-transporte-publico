import { DirectionsService } from "./services/directions-service";
import { FootprintService } from "./services/footprint-service";
import { MapComponent } from "./components/map-component";
import { SearchComponent } from "./components/search-component";
import { FootPrintComponent } from "./components/footprint-component";
import { TransportMode } from "./model/transport-mode";
import { FootprintViewModel } from "./model/footprint-view-model";

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
    footPrintComponent.onSelect((transportMode) => {
      this.mapComponent.selectTransportMode(transportMode);
    });
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
      TransportMode.SUBWAY,
      TransportMode.TRAIN,
      TransportMode.BIKE,
      TransportMode.WALK,
      // TransportMode.PUBLIC_TRANSPORT,
    ].forEach((transportMode: TransportMode) => {
      this.directionsService.getRouteForTransportMode(
        this.originPlaceId,
        this.destinationPlaceId,
        transportMode,
        (directionsResult) => {
          const footprint = this.footprintService.getFootprint(
            transportMode,
            directionsResult
          );
          const footprintViewModel = new FootprintViewModel(footprint);
          this.mapComponent.displayForTransportMode(
            directionsResult,
            transportMode,
            footprintViewModel.isVisible
          );
          this.footPrintComponent.displayForTransportMode(
            footprintViewModel,
            transportMode
          );
        }
      );
    });
  }
}
