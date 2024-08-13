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
import { routeForBikeWith1Step } from "./route-for-bike";
import { routeForWalkWith1Step } from "./route-for-walk";

describe("FootprintService", () => {
  test("given empty route, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(footprintService.getFootprint(null)).toEqual(emptyFootprint);
  });

  describe("given route for car", () => {
    test("with 1 step, then calculate distance", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(routeForCarWith1Step).distance
      ).toEqual(15);
    });

    test("with 2 steps, then calculate distance", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(routeForCarWith2Steps).distance
      ).toEqual(30);
    });

    test("with 1 step, then calculate emissions", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(routeForCarWith1Step).emissions
      ).toEqual(15 * emissionFactorByTransport[TransportMode.CAR]);
    });
  });

  describe("given route for bus", () => {
    test("with walking step, then calculate distance", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(routeForBusWithWalkingStep).distance
      ).toEqual(30);
    });

    test("with 1 step, then calculate emissions", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(routeForBusWith1Step).emissions
      ).toEqual(15 * emissionFactorByTransport[TransportMode.BUS]);
    });
  });

  describe("given route for bike", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(footprintService.getFootprint(routeForBikeWith1Step)).toEqual({
        distance: 1500,
        emissions: 1500 * emissionFactorByTransport[TransportMode.BIKE],
      });
    });
  });

  describe("given route for walk", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(footprintService.getFootprint(routeForWalkWith1Step)).toEqual({
        distance: 500,
        emissions: 500 * emissionFactorByTransport[TransportMode.WALK],
      });
    });
  });
});
