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
import { routeForSubwayWith1Step } from "./route-for-subway";
import { routeForTrainWith1Step } from "./route-for-train";

describe("FootprintService", () => {
  test("given empty route, then calculate distance", () => {
    const footprintService = new FootprintService();
    expect(footprintService.getFootprint(TransportMode.CAR, null)).toEqual(
      emptyFootprint
    );
  });

  describe("given route for car", () => {
    test("with 1 step, then calculate distance", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith1Step)
          .distance
      ).toEqual(1000);
    });

    test("with 2 steps, then calculate distance", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith2Steps)
          .distance
      ).toEqual(2000);
    });

    test("with 1 step, then calculate emissions", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith1Step)
          .emissions
      ).toEqual(1000 * emissionFactorByTransport[TransportMode.CAR]);
    });

    test("with 1 step, then calculate duration", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith1Step)
          .duration
      ).toEqual(60);
    });

    test("with 1 step, then calculate transport modes", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith1Step)
          .transportModes
      ).toEqual([TransportMode.CAR]);
    });

    test("with 2 steps, then calculate transport modes", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith2Steps)
          .transportModes
      ).toEqual([TransportMode.CAR]);
    });

    test("with 1 step, then calculate requested transport mode", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.CAR, routeForCarWith1Step)
          .requestedTransportMode
      ).toEqual(TransportMode.CAR);
    });
  });

  describe("given route for bus", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.BUS, routeForBusWith1Step)
      ).toEqual({
        distance: 1500,
        emissions: 1500 * emissionFactorByTransport[TransportMode.BUS],
        duration: 0,
        transportModes: [TransportMode.BUS],
        requestedTransportMode: TransportMode.BUS,
      });
    });

    test("with walking step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(
          TransportMode.BUS,
          routeForBusWithWalkingStep
        )
      ).toEqual({
        distance: 1600,
        emissions:
          1500 * emissionFactorByTransport[TransportMode.BUS] +
          100 * emissionFactorByTransport[TransportMode.WALK],
        duration: 0,
        transportModes: [TransportMode.BUS, TransportMode.WALK],
        requestedTransportMode: TransportMode.BUS,
      });
    });
  });

  describe("given route for bike", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.BIKE, routeForBikeWith1Step)
      ).toEqual({
        distance: 1500,
        emissions: 1500 * emissionFactorByTransport[TransportMode.BIKE],
        duration: 0,
        transportModes: [TransportMode.BIKE],
        requestedTransportMode: TransportMode.BIKE,
      });
    });
  });

  describe("given route for walk", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(TransportMode.WALK, routeForWalkWith1Step)
      ).toEqual({
        distance: 500,
        emissions: 500 * emissionFactorByTransport[TransportMode.WALK],
        duration: 0,
        transportModes: [TransportMode.WALK],
        requestedTransportMode: TransportMode.WALK,
      });
    });
  });

  describe("given route for subway", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(
          TransportMode.SUBWAY,
          routeForSubwayWith1Step
        )
      ).toEqual({
        distance: 4500,
        emissions: 4500 * emissionFactorByTransport[TransportMode.SUBWAY],
        duration: 0,
        transportModes: [TransportMode.SUBWAY],
        requestedTransportMode: TransportMode.SUBWAY,
      });
    });
  });

  describe("given route for train", () => {
    test("with 1 step, then calculate footprint", () => {
      const footprintService = new FootprintService();
      expect(
        footprintService.getFootprint(
          TransportMode.TRAIN,
          routeForTrainWith1Step
        )
      ).toEqual({
        distance: 7500,
        emissions: 7500 * emissionFactorByTransport[TransportMode.TRAIN],
        duration: 0,
        transportModes: [TransportMode.TRAIN],
        requestedTransportMode: TransportMode.TRAIN,
      });
    });
  });
});
