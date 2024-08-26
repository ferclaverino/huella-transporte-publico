import { describe, expect, test } from "@jest/globals";

import { emptyFootprint } from "../src/services/footprint-service";
import { FootprintViewModel } from "../src/model/footprint-view-model";
import { TransportMode } from "../src/model/transport-mode";

describe("FootprintViewModel", () => {
  test("given empty footprint, then get view model", () => {
    const footprintViewModel = new FootprintViewModel(emptyFootprint);
    expect(footprintViewModel).toEqual({
      distanceInKm: "0,0",
      durationInMin: "0",
      emissionsInGr: "0,00",
      isVisible: false,
      transportModes: emptyFootprint.transportModes,
    });
  });

  test("given footprint with integer numbers, then get view model", () => {
    const footprintViewModel = new FootprintViewModel({
      distance: 1000,
      duration: 60,
      emissions: 3,
      transportModes: [TransportMode.CAR],
      requestedTransportMode: TransportMode.CAR,
    });
    expect(footprintViewModel).toEqual({
      distanceInKm: "1,0",
      durationInMin: "1",
      emissionsInGr: "3,00",
      isVisible: true,
      transportModes: [TransportMode.CAR],
    });
  });

  test("given footprint with decimal numbers, then get view model", () => {
    const footprintViewModel = new FootprintViewModel({
      distance: 1500,
      duration: 90,
      emissions: 3.45,
      transportModes: [TransportMode.CAR],
      requestedTransportMode: TransportMode.CAR,
    });
    expect(footprintViewModel).toEqual({
      distanceInKm: "1,5",
      durationInMin: "2",
      emissionsInGr: "3,45",
      isVisible: true,
      transportModes: [TransportMode.CAR],
    });
  });

  test("given footprint for subway with bus, then get combined transport modes", () => {
    const footprintViewModel = new FootprintViewModel({
      ...emptyFootprint,
      transportModes: [TransportMode.SUBWAY, TransportMode.BUS],
      requestedTransportMode: TransportMode.SUBWAY,
    });

    expect(footprintViewModel.transportModes).toEqual([
      TransportMode.SUBWAY,
      TransportMode.BUS,
    ]);
  });

  test("given footprint for subway with bus and walk, then get combined transport modes", () => {
    const footprintViewModel = new FootprintViewModel({
      ...emptyFootprint,
      transportModes: [
        TransportMode.WALK,
        TransportMode.SUBWAY,
        TransportMode.BUS,
      ],
      requestedTransportMode: TransportMode.SUBWAY,
    });

    expect(footprintViewModel.transportModes).toEqual([
      TransportMode.SUBWAY,
      TransportMode.BUS,
    ]);
  });

  test("given footprint for walk, then get transport modes", () => {
    const footprintViewModel = new FootprintViewModel({
      ...emptyFootprint,
      transportModes: [TransportMode.WALK],
      requestedTransportMode: TransportMode.WALK,
    });

    expect(footprintViewModel.transportModes).toEqual([TransportMode.WALK]);
  });
});
