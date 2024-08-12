import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";
import { TransportMode } from "../model/transport-mode";

export class FootPrintComponent {
  // displayForCar(footprint: Footprint) {
  //   this.displayFootprint(this.carElementPrefix, footprint);
  // }

  // displayForBus(footprint: Footprint) {
  //   this.displayFootprint(this.busElementPrefix, footprint);
  // }

  displayForTransportMode(footprint: Footprint, transportMode: TransportMode) {
    const footprintViewModel = new FootprintViewModel(footprint);
    const distanceElement = document.getElementById(
      `${transportMode}-distance`
    )!;
    const emisionsElement = document.getElementById(
      `${transportMode}-emissions`
    )!;
    distanceElement.innerHTML = footprintViewModel.distanceInKm;
    emisionsElement.innerHTML = footprintViewModel.emissionsInGr;
  }
}
