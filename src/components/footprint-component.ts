import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";
import { TransportMode } from "../model/transport-mode";

export class FootPrintComponent {
  private selectedTransportMode: TransportMode | null = null;

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

  onSelect(select: (transportMode: TransportMode | null) => void) {
    document.querySelectorAll("table tbody tr").forEach((element) => {
      element.addEventListener("click", () => {
        const transportModeValue = element.getAttribute(
          "data-transport-mode"
        ) as string;
        const transportModeElement = TransportMode[transportModeValue];

        if (this.selectedTransportMode === transportModeElement) {
          this.selectedTransportMode = null;
        } else {
          this.selectedTransportMode = transportModeElement;
        }
        select(this.selectedTransportMode);
        this.displaySelected();
      });
    });
  }

  private displaySelected() {
    document.querySelectorAll("table tbody tr").forEach((element) => {
      const transportModeValue = element.getAttribute(
        "data-transport-mode"
      ) as string;
      if (transportModeValue === this.selectedTransportMode) {
        element.classList.add("table-primary");
      } else {
        element.classList.remove("table-primary");
      }
    });
  }
}
