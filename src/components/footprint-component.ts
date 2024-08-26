import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";
import { TransportMode } from "../model/transport-mode";

export class FootPrintComponent {
  private selectedTransportMode: TransportMode | null = null;

  displayForTransportMode(
    footprintViewModel: FootprintViewModel,
    transportMode: TransportMode
  ) {
    const distanceElement = document.getElementById(
      `${transportMode}-distance`
    )!;
    const emisionsElement = document.getElementById(
      `${transportMode}-emissions`
    )!;
    const durationElement = document.getElementById(
      `${transportMode}-duration`
    )!;
    distanceElement.innerHTML = footprintViewModel.distanceInKm;
    emisionsElement.innerHTML = footprintViewModel.emissionsInGr;
    durationElement.innerHTML = footprintViewModel.durationInMin;

    const row = document.querySelector(
      `[data-transport-mode="${transportMode}"]`
    ) as HTMLElement;

    row.style.display = footprintViewModel.isVisible ? "" : "none";
    // for debug
    // row.style.borderColor = footprintViewModel.isVisible ? "" : "red";
  }

  unSelect() {
    this.selectedTransportMode = null;
    this.displaySelected();
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
