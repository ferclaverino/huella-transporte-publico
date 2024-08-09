import { mapCenter } from "./map-component";

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

export class SearchComponent {
  constructor(
    private originElementId: string,
    private destinationElementId: string
  ) {}

  onOriginChange(setOriginPlace: (placeId: string) => void) {
    this.initAutocomplete(this.originElementId, (autocomplete) =>
      setOriginPlace(autocomplete.getPlace().place_id!)
    );
  }

  onDestinationChange(setDestinationPlace: (placeId: string) => void) {
    this.initAutocomplete(this.destinationElementId, (autocomplete) =>
      setDestinationPlace(autocomplete.getPlace().place_id!)
    );
  }

  private initAutocomplete(
    inputId: string,
    autocompleteCallback: (
      autocomplete: google.maps.places.Autocomplete
    ) => void
  ) {
    // How to use place autocomplete:
    // https://developers.google.com/maps/documentation/javascript/place-autocomplete
    const inputElement = document.getElementById(inputId)! as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(
      inputElement,
      autocompleteOptions
    );
    autocomplete.addListener("place_changed", () =>
      autocompleteCallback(autocomplete)
    );

    const clearButtonElement = document.getElementById(
      `${inputId}-clear`
    )! as HTMLElement;
    clearButtonElement.addEventListener("click", () => {
      inputElement.value = "";
    });
  }
}
