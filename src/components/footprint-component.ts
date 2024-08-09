import { Footprint } from "../model/footprint";
import { FootprintViewModel } from "../model/footprint-view-model";

export class FootPrintComponent {
  constructor(
    private carElementPrefix: string,
    private busElementPrefix: string
  ) {}

  displayForCar(footprint: Footprint) {
    this.displayFootprint(this.carElementPrefix, footprint);
  }

  displayForBus(footprint: Footprint) {
    this.displayFootprint(this.busElementPrefix, footprint);
  }

  private displayFootprint(elementPrefix: string, footprint: Footprint) {
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
