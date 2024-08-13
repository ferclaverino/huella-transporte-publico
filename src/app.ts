import { DirectionsService } from "./services/directions-service";
import { MainPage } from "./main-page";
import { FootprintService } from "./services/footprint-service";
import { MapComponent } from "./components/map-component";
import { SearchComponent } from "./components/search-component";
import { FootPrintComponent } from "./components/footprint-component";

function initMap() {
  const directionsService = new DirectionsService();
  const footprintService = new FootprintService();

  const mapComponent = new MapComponent("map", "directions");
  const searchComponent = new SearchComponent("origin", "destination");
  const footPrintComponent = new FootPrintComponent();
  const mainPageObject = new MainPage(
    directionsService,
    footprintService,
    mapComponent,
    searchComponent,
    footPrintComponent
  );
}

(window as any).initMap = initMap;
