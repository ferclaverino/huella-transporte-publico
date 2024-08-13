export const routeForBikeWith1Step = {
  routes: [
    {
      legs: [
        {
          steps: [
            {
              distance: {
                text: "1500 m",
                value: 1500,
              },
              travel_mode: "BICYCLING",
            },
          ],
        },
      ],
    },
  ],
} as google.maps.DirectionsResult;
