import { DirectionsService } from "./directions-service";
import { MainPage } from "./main-page";
import { FootprintService } from "./footprint-service";

function initMap() {
  const directionsService = new DirectionsService();
  const footprintService = new FootprintService();

  const mainPageObject = new MainPage(directionsService, footprintService);
  mainPageObject.init();
}

(window as any).initMap = initMap;
