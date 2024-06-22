import { describe, expect, test } from "@jest/globals";
import {
  FootprintService,
  TransportType,
  emissionFactorByTransport,
} from "../src/footprint-service";
import { routeForCarWith1Step, routeForCarWith2Steps } from "./route-for-car";
import {
  routeForBusWith1Step,
  routeForBusWithWalkingStep,
} from "./route-for-bus";

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
    ).toEqual(15 / emissionFactorByTransport[TransportType.CAR]);
  });

  test("given route for bus with 1 step, then calculate emissions", () => {
    const footprintService = new FootprintService();
    expect(
      footprintService.getFootprint(routeForBusWith1Step).emissions
    ).toEqual(15 / emissionFactorByTransport[TransportType.BUS]);
  });

  // TODO test for subway, train
});
