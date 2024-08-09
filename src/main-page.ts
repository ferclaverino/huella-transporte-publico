import { DirectionsService } from "./directions-service";
import { Footprint, FootprintService } from "./footprint-service";
import { FootprintViewModel } from "./footprint-view-model";

const mapCenter = {
  lat: -34.5998703,
  lng: -58.4002371,
};

const radio = 0.13;

// Create a bounding box with sides ~13km away from the center point
const defaultBounds = {
  north: mapCenter.lat + radio,
  south: mapCenter.lat - radio,
  east: mapCenter.lng + radio,
  west: mapCenter.lng - radio,
};

const autocompleteOptions = {
  bounds: defaultBounds,
  componentRestrictions: { country: "ar" },
  fields: ["place_id"],
  strictBounds: true,
};

export class MainPage {
  private readonly map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 15,
    center: mapCenter,
    draggable: false,
  });
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

  private readonly originElement = document.getElementById(
    "origin"
  )! as HTMLInputElement;
  private readonly destinationElement = document.getElementById(
    "destination"
  )! as HTMLInputElement;

  private originPlaceId: string;
  private destinationPlaceId: string;

  constructor(
    private directionsService: DirectionsService,
    private footprintService: FootprintService
  ) {
    this.carDirectionsRenderer.setMap(this.map);
    this.busDirectionsRenderer.setMap(this.map);
  }

  init() {
    this.initOriginAutocomplete();
    this.initDestinationAutocomplete();
  }

  initOriginAutocomplete() {
    // How to use place autocomplete:
    // https://developers.google.com/maps/documentation/javascript/place-autocomplete

    const autocomplete = new google.maps.places.Autocomplete(
      this.originElement,
      autocompleteOptions
    );

    autocomplete.addListener("place_changed", () => {
      this.setOriginPlace(autocomplete.getPlace());
    });
  }

  initDestinationAutocomplete() {
    // How to use place autocomplete:
    // https://developers.google.com/maps/documentation/javascript/place-autocomplete

    const autocomplete = new google.maps.places.Autocomplete(
      this.destinationElement,
      autocompleteOptions
    );

    autocomplete.addListener("place_changed", () => {
      this.setDestinationPlace(autocomplete.getPlace());
    });
  }

  private setOriginPlace(place: google.maps.places.PlaceResult) {
    this.originPlaceId = place.place_id!;
    this.calculateAndDisplayFootprint();
  }

  private setDestinationPlace(place: google.maps.places.PlaceResult) {
    this.destinationPlaceId = place.place_id!;
    this.calculateAndDisplayFootprint();
  }

  private calculateAndDisplayFootprint() {
    if (!this.originPlaceId) return;
    if (!this.destinationPlaceId) return;

    this.directionsService
      .routeForCar(this.originPlaceId, this.destinationPlaceId)
      .then((directionsResult) => {
        this.displayRoute(this.carDirectionsRenderer, directionsResult);
        this.displayFootprint(
          this.footprintService.getFootprint(directionsResult),
          "car"
        );
      });

    this.directionsService
      .routeForBus(this.originPlaceId, this.destinationPlaceId)
      .then((directionsResult) => {
        this.displayRoute(this.busDirectionsRenderer, directionsResult);
        this.displayFootprint(
          this.footprintService.getFootprint(directionsResult),
          "bus"
        );
      });
  }

  private displayRoute(
    directionsRender: google.maps.DirectionsRenderer,
    route: google.maps.DirectionsResult
  ) {
    directionsRender.setDirections(route);
  }

  private displayFootprint(footprint: Footprint, elementPrefix: string) {
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
