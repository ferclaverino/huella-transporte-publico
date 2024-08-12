import { colorByTransport } from "../model/color-by-transport-mode";
import { TransportMode } from "../model/transport-mode";

export const mapCenter = {
  lat: -34.5998703,
  lng: -58.4002371,
};

export class MapComponent {
  private map: google.maps.Map;
  private renderers: Record<TransportMode, google.maps.DirectionsRenderer>;

  // private readonly carDirectionsRenderer = new google.maps.DirectionsRenderer({
  //   polylineOptions: {
  //     strokeColor: "#73b9ff",
  //     strokeWeight: 5,
  //     strokeOpacity: 0.8,
  //   },
  // });
  // private readonly busDirectionsRenderer = new google.maps.DirectionsRenderer({
  //   polylineOptions: {
  //     strokeColor: "#5cb85c",
  //     strokeWeight: 5,
  //     strokeOpacity: 0.8,
  //   },
  // });

  constructor(mapElementId: string) {
    this.map = new google.maps.Map(document.getElementById(mapElementId)!, {
      zoom: 15,
      center: mapCenter,
      draggable: false,
    });
    this.renderers = this.buildRenderers();
    for (const transportMode in this.renderers) {
      this.renderers[transportMode].setMap(this.map);
    }
    // this.carDirectionsRenderer.setMap(this.map);
    // this.busDirectionsRenderer.setMap(this.map);
  }

  private buildRenderers(): Record<
    TransportMode,
    google.maps.DirectionsRenderer
  > {
    return Object.keys(TransportMode).reduce((renderers, transportMode) => {
      renderers[transportMode] = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: colorByTransport[transportMode],
          strokeWeight: 5,
          strokeOpacity: 0.8,
        },
      });
      return renderers;
    }, {} as any as Record<TransportMode, google.maps.DirectionsRenderer>);
  }

  displayForTransportMode(
    route: google.maps.DirectionsResult,
    transportMode: TransportMode
  ) {
    this.renderers[transportMode].setDirections(route);
  }
  // displayForCar(route: google.maps.DirectionsResult) {
  //   this.carDirectionsRenderer.setDirections(route);
  // }

  // displayForBus(route: google.maps.DirectionsResult) {
  //   this.busDirectionsRenderer.setDirections(route);
  // }
}
