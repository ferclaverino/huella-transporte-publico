export const mapCenter = {
  lat: -34.5998703,
  lng: -58.4002371,
};

export class MapComponent {
  private map: google.maps.Map;

  private readonly carDirectionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#73b9ff",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
  });
  private readonly busDirectionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#5cb85c",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
  });

  constructor(mapElementId: string) {
    this.map = new google.maps.Map(document.getElementById(mapElementId)!, {
      zoom: 15,
      center: mapCenter,
      draggable: false,
    });

    this.carDirectionsRenderer.setMap(this.map);
    this.busDirectionsRenderer.setMap(this.map);
  }

  displayForCar(route: google.maps.DirectionsResult) {
    this.carDirectionsRenderer.setDirections(route);
  }

  displayForBus(route: google.maps.DirectionsResult) {
    this.busDirectionsRenderer.setDirections(route);
  }
}
