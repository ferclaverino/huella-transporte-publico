import { describe, expect, test } from "@jest/globals";

import { emptyFootprint } from "../src/services/footprint-service";
import { FootprintViewModel } from "../src/model/footprint-view-model";

describe("FootprintViewModel", () => {
  test("given empty footprint, then get view model", () => {
    const footprintViewModel = new FootprintViewModel(emptyFootprint);
    expect(footprintViewModel).toEqual({
      distanceInKm: "0,0",
      durationInMin: "0",
      emissionsInGr: "0,00",
    });
  });
});
