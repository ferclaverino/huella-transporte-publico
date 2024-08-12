import { describe, expect, test } from "@jest/globals";

import { routeForCarWith1Step, routeForCarWith2Steps } from "./route-for-car";
import {
  routeForBusWith1Step,
  routeForBusWithWalkingStep,
} from "./route-for-bus";
import { emissionFactorByTransport } from "../src/model/emission-factor";
import { FootprintService } from "../src/services/footprint-service";
import { TravelMode } from "../src/model/travel-mode";

describe("FootprintService", () => {
  test("given route for car with 1 step, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForCarWith1Step).distance
    ).toEqual(15);
  });

  test("given route for car with 2 steps, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForCarWith2Steps).distance
    ).toEqual(30);
  });

  test("given route for bus with walking step, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForBusWithWalkingStep).distance
    ).toEqual(15);
  });

  test("given route for car with 1 step, then calculate emissions", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForCarWith1Step).emissions
    ).toEqual(15 / emissionFactorByTransport[TravelMode.CAR]);
  });

  test("given route for bus with 1 step, then calculate emissions", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForBusWith1Step).emissions
    ).toEqual(15 / emissionFactorByTransport[TravelMode.BUS]);
  });

  // TODO test for subway, train
});
