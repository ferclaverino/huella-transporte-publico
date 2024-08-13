import { colorByTransport } from "../model/color-by-transport-mode";
import { TransportMode } from "../model/transport-mode";

export const mapCenter = {
  lat: -34.5998703,
  lng: -58.4002371,
};

export class MapComponent {
  private map: google.maps.Map;
  private renderers: Record<TransportMode, google.maps.DirectionsRenderer>;
  private selectedTransportMode: TransportMode | null = null;
  private directionsElement: HTMLElement;

  constructor(mapElementId: string, directionsElementId: string) {
    this.map = new google.maps.Map(document.getElementById(mapElementId)!, {
      zoom: 15,
      center: mapCenter,
      disableDefaultUI: true,
      gestureHandling: "cooperative",
    });
    this.renderers = this.buildRenderers();
    for (const transportMode in this.renderers) {
      this.renderers[transportMode].setMap(this.map);
    }
    this.directionsElement = document.getElementById(directionsElementId)!;
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

  selectTransportMode(transportMode: TransportMode | null) {
    if (this.selectedTransportMode)
      this.displayTransportModeAsUnSelected(this.selectedTransportMode);
    this.selectedTransportMode = transportMode;
    if (this.selectedTransportMode)
      this.displayTransportModeAsSelected(this.selectedTransportMode);
  }

  private displayTransportModeAsSelected(transportMode: TransportMode) {
    const renderer = this.renderers[transportMode];
    renderer.setOptions(
      this.getRendererOptionsForSelected(TransportMode[transportMode])
    );
    renderer.setPanel(this.directionsElement);
    this.redrawDirections(renderer);
  }

  private displayTransportModeAsUnSelected(transportMode: TransportMode) {
    const renderer = this.renderers[transportMode];
    renderer.setOptions(this.getRendererOptions(TransportMode[transportMode]));
    renderer.setPanel(null);
    this.redrawDirections(renderer);
  }

  private redrawDirections(renderer: google.maps.DirectionsRenderer) {
    if (renderer.getDirections())
      renderer.setDirections(renderer.getDirections());
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

  private getRendererOptionsForSelected(transportMode: TransportMode) {
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
