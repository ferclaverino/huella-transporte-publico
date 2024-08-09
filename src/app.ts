import { DirectionsService } from "./directions-service";
import { MainPage } from "./main-page";
import { FootprintService } from "./footprint-service";
import { MapComponent } from "./map-component";
import { SearchComponent } from "./search-component";

function initMap() {
  const directionsService = new DirectionsService();
  const footprintService = new FootprintService();

  const mapComponent = new MapComponent("map");
  const searchComponent = new SearchComponent("origin", "destination");

  const mainPageObject = new MainPage(
    directionsService,
    footprintService,
    mapComponent,
    searchComponent
  );
}

(window as any).initMap = initMap;
