import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";
import { TransportMode } from "../model/transport-mode";

export class FootPrintComponent {
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

  onHover(hover: (transportMode: TransportMode) => void) {
    // onHover() {
    document.querySelectorAll("table tbody tr").forEach((element) => {
      element.addEventListener("mouseover", () => {
        const transportModeValue = element.getAttribute(
          "data-transport-mode"
        ) as string;
        hover(TransportMode[transportModeValue]);
      });
    });
  }
}
