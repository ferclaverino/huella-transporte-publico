import { DirectionsService } from "./services/directions-service";
import { FootprintService } from "./services/footprint-service";
import { MapComponent } from "./components/map-component";
import { SearchComponent } from "./components/search-component";
import { FootPrintComponent } from "./components/footprint-component";
import { carTransportModes, TransportMode } from "./model/transport-mode";
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

    this.footPrintComponent.show();

    this.calculateAndDisplayFootprintForCar();
    this.calculateAndDisplayFootprintForPublic();
  }

  private calculateAndDisplayFootprintForPublic() {
    [
      TransportMode.BUS,
      TransportMode.SUBWAY,
      TransportMode.TRAIN,
      TransportMode.BIKE,
      TransportMode.WALK,
    ].forEach((transportMode: TransportMode) => {
      this.directionsService.getRouteForTransportMode(
        this.originPlaceId,
        this.destinationPlaceId,
        transportMode,
        (directionsResult) =>
          this.displayFootPrint(transportMode, directionsResult)
      );
    });
  }

  private calculateAndDisplayFootprintForCar() {
    this.directionsService.getRouteForTransportMode(
      this.originPlaceId,
      this.destinationPlaceId,
      TransportMode.CAR,
      (directionsResult) => this.displayFootPrintForCar(directionsResult)
    );
  }

  private displayFootPrintForCar(
    directionsResult: google.maps.DirectionsResult | null
  ) {
    [TransportMode.CAR].forEach((transportMode) =>
      this.displayFootPrint(transportMode, directionsResult)
    );
  }

  private displayFootPrint(
    transportMode: TransportMode,
    directionsResult: google.maps.DirectionsResult | null
  ) {
    const footprint = this.footprintService.getFootprint(
      transportMode,
      directionsResult
    );
    const footprintViewModel = new FootprintViewModel(footprint);
    this.mapComponent.displayForTransportMode(
      transportMode,
      directionsResult,
      footprintViewModel.isVisible
    );
    this.footPrintComponent.displayForTransportMode(
      transportMode,
      footprintViewModel
    );
  }
}
