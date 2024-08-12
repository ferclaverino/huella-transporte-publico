import { describe, expect, test } from "@jest/globals";

import { routeForCarWith1Step, routeForCarWith2Steps } from "./route-for-car";
import {
  routeForBusWith1Step,
  routeForBusWithWalkingStep,
} from "./route-for-bus";
import { emissionFactorByTransport } from "../src/model/emission-factor";
import {
  emptyFootprint,
  FootprintService,
} from "../src/services/footprint-service";
import { TransportMode } from "../src/model/transport-mode";

describe("FootprintService", () => {
  test("given empty route, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(footprintService.getFootprint(null)).toEqual(emptyFootprint);
  });

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
    ).toEqual(15 / emissionFactorByTransport[TransportMode.CAR]);
  });

  test("given route for bus with 1 step, then calculate emissions", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForBusWith1Step).emissions
    ).toEqual(15 / emissionFactorByTransport[TransportMode.BUS]);
  });

  // TODO test for subway, train
});
