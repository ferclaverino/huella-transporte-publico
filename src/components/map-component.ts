import { colorByTransport } from "../model/color-by-transport-mode";
import { TransportMode } from "../model/transport-mode";

export const mapCenter = {
  lat: -34.5998703,
  lng: -58.4002371,
};

export class MapComponent {
  private map: google.maps.Map;
  private renderers: Record<TransportMode, google.maps.DirectionsRenderer>;

  constructor(mapElementId: string) {
    this.map = new google.maps.Map(document.getElementById(mapElementId)!, {
      zoom: 15,
      center: mapCenter,
      disableDefaultUI: true,
      // TODO disable for scroll on mobile
      // draggable: false,
    });
    this.renderers = this.buildRenderers();
    for (const transportMode in this.renderers) {
      this.renderers[transportMode].setMap(this.map);
    }
  }

  private buildRenderers(): Record<
    TransportMode,
    google.maps.DirectionsRenderer
  > {
    return Object.keys(TransportMode).reduce((renderers, transportMode) => {
      renderers[transportMode] = new google.maps.DirectionsRenderer({
        suppressBicyclingLayer: true,
        polylineOptions: {
          strokeColor: colorByTransport[transportMode],
          strokeWeight: 8,
          strokeOpacity: 0.9,
        },
      });
      return renderers;
    }, {} as any as Record<TransportMode, google.maps.DirectionsRenderer>);
  }

  displayForTransportMode(
    route: google.maps.DirectionsResult | null,
    transportMode: TransportMode
  ) {
    this.renderers[transportMode].setDirections(route);
  }
}
