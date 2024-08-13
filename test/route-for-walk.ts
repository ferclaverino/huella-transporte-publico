export const routeForWalkWith1Step = {
  routes: [
    {
      legs: [
        {
          steps: [
            {
              distance: {
                text: "500 m",
                value: 500,
              },
              travel_mode: "WALKING",
            },
          ],
        },
      ],
    },
  ],
} as google.maps.DirectionsResult;
