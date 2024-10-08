import { displayNameByTransport } from "../model/display-name-by-transport-mode";
import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";
import { carTransportModes, TransportMode } from "../model/transport-mode";

export class FootPrintComponent {
  private selectedTransportMode: TransportMode | null = null;

  displayForTransportMode(
    transportMode: TransportMode,
    footprintViewModel: FootprintViewModel
  ) {
    const transportModesElement = document.getElementById(
      `${transportMode}-transport-modes`
    )!;
    transportModesElement.innerHTML = footprintViewModel.transportModes
      .map((t) => this.getBadgeForTransportMode(transportMode, t))
      .join(" ");

    const distanceElement = document.getElementById(
      `${transportMode}-distance`
    )!;
    distanceElement.innerHTML = footprintViewModel.distanceInKm;

    const emisionsElement = document.getElementById(
      `${transportMode}-emissions`
    )!;
    emisionsElement.innerHTML = footprintViewModel.emissionsInGr;

    const durationElement = document.getElementById(
      `${transportMode}-duration`
    )!;
    durationElement.innerHTML = footprintViewModel.durationInMin;

    const rowElement = document.querySelector(
      `[data-transport-mode="${transportMode}"]`
    ) as HTMLElement;
    rowElement.style.display = footprintViewModel.isVisible ? "" : "none";
  }

  private getBadgeForTransportMode(
    currentTransportMode: TransportMode,
    combinedTransportMode: TransportMode
  ): string {
    let transportMode = currentTransportMode;
    if (carTransportModes.includes(currentTransportMode))
      transportMode = TransportMode.CAR;
    return `<span class="badge rounded-pill bg-${transportMode}">${displayNameByTransport[combinedTransportMode]}</span>`;
  }

  show() {
    const resultsCardElement = document.getElementById(
      "results-card"
    ) as HTMLElement;
    resultsCardElement.style.display = "flex";

    // If there is some transport mode selected, then unselect
    this.unSelect();
  }

  private unSelect() {
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
