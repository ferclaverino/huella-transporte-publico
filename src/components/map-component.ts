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
      renderers[transportMode] = new google.maps.DirectionsRenderer(
        this.getRendererOptions(TransportMode[transportMode])
      );
      return renderers;
    }, {} as any as Record<TransportMode, google.maps.DirectionsRenderer>);
  }

  displayForTransportMode(
    route: google.maps.DirectionsResult | null,
    transportMode: TransportMode
  ) {
    this.renderers[transportMode].setDirections(route);
  }

  highlightTransportMode(transportMode: TransportMode) {
    for (const t in this.renderers) {
      if (this.renderers[t].directions) {
        if (t === transportMode) {
          this.renderers[t].setOptions(
            this.getRendererOptionsForHighlight(TransportMode[t])
          );
        } else {
          this.renderers[t].setOptions(
            this.getRendererOptions(TransportMode[t])
          );
        }
        this.renderers[t].setDirections(this.renderers[t].directions);
      }
    }
  }

  private getRendererOptions(transportMode: TransportMode) {
    return {
      suppressBicyclingLayer: true,
      polylineOptions: {
        strokeColor: colorByTransport[transportMode],
        strokeWeight: 5,
        strokeOpacity: 0.5,
      },
    };
  }

  private getRendererOptionsForHighlight(transportMode: TransportMode) {
    return {
      suppressBicyclingLayer: true,
      polylineOptions: {
        strokeColor: colorByTransport[transportMode],
        strokeWeight: 10,
        strokeOpacity: 1,
      },
    };
  }
}
