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
      renderers[transportMode] = new google.maps.DirectionsRenderer();
      return renderers;
    }, {} as any as Record<TransportMode, google.maps.DirectionsRenderer>);
  }

  displayForTransportMode(
    transportMode: TransportMode,
    route: google.maps.DirectionsResult | null,

    isVisible: boolean
  ) {
    this.renderers[transportMode].setDirections(route);
    this.renderers[transportMode].setOptions(
      this.getRendererOptionsForUnselected(transportMode, isVisible)
    );
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
    renderer.setOptions(
      this.getRendererOptionsForUnselected(TransportMode[transportMode])
    );
    renderer.setPanel(null);
    this.redrawDirections(renderer);
  }

  private redrawDirections(renderer: google.maps.DirectionsRenderer) {
    if (renderer.getDirections())
      renderer.setDirections(renderer.getDirections());
  }

  private getRendererOptionsForUnselected(
    transportMode: TransportMode,
    isVisible = true
  ) {
    return this.getRendererOption(transportMode, 5, 0.6, isVisible);
  }

  private getRendererOptionsForSelected(transportMode: TransportMode) {
    return this.getRendererOption(transportMode, 10, 1, true);
  }

  private getRendererOption(
    transportMode: TransportMode,
    strokeWeight: number,
    strokeOpacity: number,
    isVisible: boolean
  ) {
    return {
      suppressBicyclingLayer: true,
      polylineOptions: {
        strokeColor: colorByTransport[transportMode],
        strokeWeight,
        strokeOpacity,
        visible: isVisible,
      },
    };
  }
}
