export const routeForSubwayWith1Step = {
  routes: [
    {
      legs: [
        {
          steps: [
            {
              distance: {
                text: "4500 m",
                value: 4500,
              },
              travel_mode: "TRANSIT",
              transit: {
                line: {
                  vehicle: {
                    type: "SUBWAY",
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
} as google.maps.DirectionsResult;

// From calesita plaza flores to plaza miserere
export const routeForSubway = {
  geocoded_waypoints: [
    {
      geocoder_status: "OK",
      place_id: "ChIJo699xYnJvJURZBHg3Cpfswo",
      types: ["establishment", "point_of_interest"],
    },
    {
      geocoder_status: "OK",
      place_id: "ChIJoa3_DvLKvJURG2wTnGe8du0",
      types: ["establishment", "park", "point_of_interest"],
    },
  ],
  routes: [
    {
      bounds: {
        south: -34.62905,
        west: -58.46425000000001,
        north: -34.609550000000006,
        east: -58.406380000000006,
      },
      copyrights: "Map data ©2024",
      fare: {
        currency: "ARS",
        text: "650,00 ARS",
        value: 650,
      },
      legs: [
        {
          arrival_time: {
            text: "11:00",
            time_zone: "America/Buenos_Aires",
            value: "2024-08-13T14:00:40.000Z",
          },
          departure_time: {
            text: "10:41",
            time_zone: "America/Buenos_Aires",
            value: "2024-08-13T13:41:43.000Z",
          },
          distance: {
            text: "6,1 km",
            value: 6135,
          },
          duration: {
            text: "19 min",
            value: 1137,
          },
          end_address:
            "Plaza Miserere, Bartolomé Mitre 2819, C1203 Cdad. Autónoma de Buenos Aires, Argentina",
          end_location: {
            lat: -34.6101685,
            lng: -58.40760059999999,
          },
          start_address:
            "Yerbal 2450 C1406GKD, C1406GKD Cdad. Autónoma de Buenos Aires, Argentina",
          start_location: {
            lat: -34.6278643,
            lng: -58.4638948,
          },
          steps: [
            {
              distance: {
                text: "0,2 km",
                value: 242,
              },
              duration: {
                text: "3 min",
                value: 199,
              },
              end_location: {
                lat: -34.62905,
                lng: -58.46353999999999,
              },
              polyline: {
                points:
                  "bgjrEhvycJRfABCHIFG@EBC@E@E@IZJDONg@@@@?@?@?@?@?@A@??A@??A@??A@A?A?A?A@??A?AAAb@O?A?A?A?A?A?A?A?A?A@??A@A?A@??A@?@A@?@??A@?@?@??@@?@?@@@??@@@?@@??@@@LGFVBLBAJS",
              },
              start_location: {
                lat: -34.6278643,
                lng: -58.4638948,
              },
              steps: [
                {
                  distance: {
                    text: "36 m",
                    value: 36,
                  },
                  duration: {
                    text: "1 min",
                    value: 28,
                  },
                  end_location: {
                    lat: -34.6279581,
                    lng: -58.464249,
                  },
                  polyline: {
                    points: "bgjrEhvycJRfA",
                  },
                  start_location: {
                    lat: -34.6278643,
                    lng: -58.4638948,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "bgjrEhvycJRfA",
                  path: [
                    {
                      lat: -34.627860000000005,
                      lng: -58.463890000000006,
                    },
                    {
                      lat: -34.62796,
                      lng: -58.46425000000001,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.627860000000005,
                      lng: -58.463890000000006,
                    },
                    {
                      lat: -34.62796,
                      lng: -58.46425000000001,
                    },
                  ],
                  instructions: "Dirígete al <b>oeste</b> por <b>Yerbal</b>",
                  maneuver: "",
                },
                {
                  distance: {
                    text: "37 m",
                    value: 37,
                  },
                  duration: {
                    text: "1 min",
                    value: 30,
                  },
                  end_location: {
                    lat: -34.6281303,
                    lng: -58.46397930000001,
                  },
                  maneuver: "turn-left",
                  polyline: {
                    points: "vgjrEpxycJBCHIFG@EBC@E@E@I",
                  },
                  start_location: {
                    lat: -34.6279581,
                    lng: -58.464249,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "vgjrEpxycJBCHIFG@EBC@E@E@I",
                  path: [
                    {
                      lat: -34.62796,
                      lng: -58.46425000000001,
                    },
                    {
                      lat: -34.62798,
                      lng: -58.46423000000001,
                    },
                    {
                      lat: -34.62803,
                      lng: -58.464180000000006,
                    },
                    {
                      lat: -34.62807,
                      lng: -58.46414000000001,
                    },
                    {
                      lat: -34.628080000000004,
                      lng: -58.464110000000005,
                    },
                    {
                      lat: -34.6281,
                      lng: -58.464090000000006,
                    },
                    {
                      lat: -34.62811,
                      lng: -58.46406,
                    },
                    {
                      lat: -34.62812,
                      lng: -58.46403000000001,
                    },
                    {
                      lat: -34.628130000000006,
                      lng: -58.46398000000001,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62796,
                      lng: -58.46425000000001,
                    },
                    {
                      lat: -34.62798,
                      lng: -58.46423000000001,
                    },
                    {
                      lat: -34.62803,
                      lng: -58.464180000000006,
                    },
                    {
                      lat: -34.62807,
                      lng: -58.46414000000001,
                    },
                    {
                      lat: -34.628080000000004,
                      lng: -58.464110000000005,
                    },
                    {
                      lat: -34.6281,
                      lng: -58.464090000000006,
                    },
                    {
                      lat: -34.62811,
                      lng: -58.46406,
                    },
                    {
                      lat: -34.62812,
                      lng: -58.46403000000001,
                    },
                    {
                      lat: -34.628130000000006,
                      lng: -58.46398000000001,
                    },
                  ],
                  instructions:
                    "Gira a la <b>izquierda</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "16 m",
                    value: 16,
                  },
                  duration: {
                    text: "1 min",
                    value: 13,
                  },
                  end_location: {
                    lat: -34.6282702,
                    lng: -58.4640368,
                  },
                  maneuver: "turn-right",
                  polyline: {
                    points: "xhjrEzvycJZJ",
                  },
                  start_location: {
                    lat: -34.6281303,
                    lng: -58.46397930000001,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "xhjrEzvycJZJ",
                  path: [
                    {
                      lat: -34.628130000000006,
                      lng: -58.46398000000001,
                    },
                    {
                      lat: -34.62827,
                      lng: -58.464040000000004,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.628130000000006,
                      lng: -58.46398000000001,
                    },
                    {
                      lat: -34.62827,
                      lng: -58.464040000000004,
                    },
                  ],
                  instructions:
                    "Gira a la <b>derecha</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "28 m",
                    value: 28,
                  },
                  duration: {
                    text: "1 min",
                    value: 22,
                  },
                  end_location: {
                    lat: -34.6283812,
                    lng: -58.46376499999999,
                  },
                  maneuver: "turn-left",
                  polyline: {
                    points: "tijrEfwycJDONg@",
                  },
                  start_location: {
                    lat: -34.6282702,
                    lng: -58.4640368,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "tijrEfwycJDONg@",
                  path: [
                    {
                      lat: -34.62827,
                      lng: -58.464040000000004,
                    },
                    {
                      lat: -34.6283,
                      lng: -58.46396000000001,
                    },
                    {
                      lat: -34.62838,
                      lng: -58.46376000000001,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62827,
                      lng: -58.464040000000004,
                    },
                    {
                      lat: -34.6283,
                      lng: -58.46396000000001,
                    },
                    {
                      lat: -34.62838,
                      lng: -58.46376000000001,
                    },
                  ],
                  instructions:
                    "Gira a la <b>izquierda</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "14 m",
                    value: 14,
                  },
                  duration: {
                    text: "1 min",
                    value: 12,
                  },
                  end_location: {
                    lat: -34.6284882,
                    lng: -58.46371799999999,
                  },
                  maneuver: "turn-right",
                  polyline: {
                    points: "jjjrEnuycJ@@@?@?@?@?@?@A@??A@??A@??A@A",
                  },
                  start_location: {
                    lat: -34.6283812,
                    lng: -58.46376499999999,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "jjjrEnuycJ@@@?@?@?@?@?@A@??A@??A@??A@A",
                  path: [
                    {
                      lat: -34.62838,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.62839,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628400000000006,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62841,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628420000000006,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62843,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628440000000005,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62845,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.628460000000004,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.628460000000004,
                      lng: -58.463750000000005,
                    },
                    {
                      lat: -34.62847,
                      lng: -58.463750000000005,
                    },
                    {
                      lat: -34.62847,
                      lng: -58.46374,
                    },
                    {
                      lat: -34.62848,
                      lng: -58.46374,
                    },
                    {
                      lat: -34.62848,
                      lng: -58.463730000000005,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.46372,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62838,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.62839,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628400000000006,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62841,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628420000000006,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62843,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.628440000000005,
                      lng: -58.463770000000004,
                    },
                    {
                      lat: -34.62845,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.628460000000004,
                      lng: -58.46376000000001,
                    },
                    {
                      lat: -34.628460000000004,
                      lng: -58.463750000000005,
                    },
                    {
                      lat: -34.62847,
                      lng: -58.463750000000005,
                    },
                    {
                      lat: -34.62847,
                      lng: -58.46374,
                    },
                    {
                      lat: -34.62848,
                      lng: -58.46374,
                    },
                    {
                      lat: -34.62848,
                      lng: -58.463730000000005,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.46372,
                    },
                  ],
                  instructions:
                    "Gira a la <b>derecha</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "5 m",
                    value: 5,
                  },
                  duration: {
                    text: "1 min",
                    value: 4,
                  },
                  end_location: {
                    lat: -34.6284948,
                    lng: -58.4636618,
                  },
                  maneuver: "turn-left",
                  polyline: {
                    points: "`kjrEfuycJ?A?A?A@??A?AAA",
                  },
                  start_location: {
                    lat: -34.6284882,
                    lng: -58.46371799999999,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "`kjrEfuycJ?A?A?A@??A?AAA",
                  path: [
                    {
                      lat: -34.62849,
                      lng: -58.46372,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.463710000000006,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.4637,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.46369000000001,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.46369000000001,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.463680000000004,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.46367000000001,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.463660000000004,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62849,
                      lng: -58.46372,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.463710000000006,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.4637,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.46369000000001,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.46369000000001,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.463680000000004,
                    },
                    {
                      lat: -34.6285,
                      lng: -58.46367000000001,
                    },
                    {
                      lat: -34.62849,
                      lng: -58.463660000000004,
                    },
                  ],
                  instructions:
                    "Gira a la <b>izquierda</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "21 m",
                    value: 21,
                  },
                  duration: {
                    text: "1 min",
                    value: 17,
                  },
                  end_location: {
                    lat: -34.6286732,
                    lng: -58.4635839,
                  },
                  maneuver: "turn-right",
                  polyline: {
                    points: "`kjrEztycJb@O",
                  },
                  start_location: {
                    lat: -34.6284948,
                    lng: -58.4636618,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "`kjrEztycJb@O",
                  path: [
                    {
                      lat: -34.62849,
                      lng: -58.463660000000004,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46358000000001,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62849,
                      lng: -58.463660000000004,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46358000000001,
                    },
                  ],
                  instructions:
                    "Gira a la <b>derecha</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "15 m",
                    value: 15,
                  },
                  duration: {
                    text: "1 min",
                    value: 12,
                  },
                  end_location: {
                    lat: -34.628715,
                    lng: -58.4634437,
                  },
                  maneuver: "turn-left",
                  polyline: {
                    points: "dljrEjtycJ?A?A?A?A?A?A?A?A?A@??A@A?A@??A@?@A",
                  },
                  start_location: {
                    lat: -34.6286732,
                    lng: -58.4635839,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs:
                    "dljrEjtycJ?A?A?A?A?A?A?A?A?A@??A@A?A@??A@?@A",
                  path: [
                    {
                      lat: -34.62867,
                      lng: -58.46358000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463570000000004,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46356000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463550000000005,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46354,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463530000000006,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46352,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46351000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.4635,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.62868,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.62868,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.628690000000006,
                      lng: -58.46347000000001,
                    },
                    {
                      lat: -34.628690000000006,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.6287,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.6287,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.628710000000005,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62872,
                      lng: -58.463440000000006,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62867,
                      lng: -58.46358000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463570000000004,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46356000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463550000000005,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46354,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.463530000000006,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46352,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46351000000001,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.4635,
                    },
                    {
                      lat: -34.62867,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.62868,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.62868,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.628690000000006,
                      lng: -58.46347000000001,
                    },
                    {
                      lat: -34.628690000000006,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.6287,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.6287,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.628710000000005,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62872,
                      lng: -58.463440000000006,
                    },
                  ],
                  instructions:
                    "Gira a la <b>izquierda</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "16 m",
                    value: 16,
                  },
                  duration: {
                    text: "1 min",
                    value: 13,
                  },
                  end_location: {
                    lat: -34.6288352,
                    lng: -58.4634977,
                  },
                  maneuver: "turn-right",
                  polyline: {
                    points: "nljrEnsycJ@?@??A@?@?@??@@?@?@@@??@@@?@@??@@@",
                  },
                  start_location: {
                    lat: -34.628715,
                    lng: -58.4634437,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs:
                    "nljrEnsycJ@?@??A@?@?@??@@?@?@@@??@@@?@@??@@@",
                  path: [
                    {
                      lat: -34.62872,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628730000000004,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62874,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62874,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.628750000000004,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62876,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62877,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62877,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628780000000006,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62879,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628800000000005,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62881,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62881,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.628820000000005,
                      lng: -58.46347000000001,
                    },
                    {
                      lat: -34.628820000000005,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.62883,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.62883,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.628840000000004,
                      lng: -58.4635,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62872,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628730000000004,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62874,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62874,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.628750000000004,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62876,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62877,
                      lng: -58.46343,
                    },
                    {
                      lat: -34.62877,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628780000000006,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.62879,
                      lng: -58.463440000000006,
                    },
                    {
                      lat: -34.628800000000005,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62881,
                      lng: -58.46345,
                    },
                    {
                      lat: -34.62881,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.628820000000005,
                      lng: -58.46347000000001,
                    },
                    {
                      lat: -34.628820000000005,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.62883,
                      lng: -58.463480000000004,
                    },
                    {
                      lat: -34.62883,
                      lng: -58.46349000000001,
                    },
                    {
                      lat: -34.628840000000004,
                      lng: -58.4635,
                    },
                  ],
                  instructions:
                    "Gira a la <b>derecha</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "24 m",
                    value: 24,
                  },
                  duration: {
                    text: "1 min",
                    value: 20,
                  },
                  end_location: {
                    lat: -34.6289081,
                    lng: -58.4634645,
                  },
                  maneuver: "turn-left",
                  polyline: {
                    points: "fmjrEzsycJLG",
                  },
                  start_location: {
                    lat: -34.6288352,
                    lng: -58.4634977,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "fmjrEzsycJLG",
                  path: [
                    {
                      lat: -34.628840000000004,
                      lng: -58.4635,
                    },
                    {
                      lat: -34.628910000000005,
                      lng: -58.463460000000005,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.628840000000004,
                      lng: -58.4635,
                    },
                    {
                      lat: -34.628910000000005,
                      lng: -58.463460000000005,
                    },
                  ],
                  instructions:
                    "Gira a la <b>izquierda</b> hacia <b>Av. Rivadavia</b>",
                },
                {
                  distance: {
                    text: "19 m",
                    value: 19,
                  },
                  duration: {
                    text: "1 min",
                    value: 16,
                  },
                  end_location: {
                    lat: -34.6289684,
                    lng: -58.46365059999999,
                  },
                  maneuver: "turn-right",
                  polyline: {
                    points: "tmjrErsycJFVBL",
                  },
                  start_location: {
                    lat: -34.6289081,
                    lng: -58.4634645,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "tmjrErsycJFVBL",
                  path: [
                    {
                      lat: -34.628910000000005,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.62895,
                      lng: -58.46358000000001,
                    },
                    {
                      lat: -34.62897,
                      lng: -58.46365000000001,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.628910000000005,
                      lng: -58.463460000000005,
                    },
                    {
                      lat: -34.62895,
                      lng: -58.46358000000001,
                    },
                    {
                      lat: -34.62897,
                      lng: -58.46365000000001,
                    },
                  ],
                  instructions:
                    'Gira a la <b>derecha</b> hacia <b>Av. Rivadavia</b><div style="font-size:0.9em">El destino está a la derecha.</div>',
                },
                {
                  distance: {
                    text: "11 m",
                    value: 11,
                  },
                  duration: {
                    text: "1 min",
                    value: 12,
                  },
                  end_location: {
                    lat: -34.62905,
                    lng: -58.46353999999999,
                  },
                  polyline: {
                    points: "dnjrEvtycJJS",
                  },
                  start_location: {
                    lat: -34.6289944,
                    lng: -58.4636397,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "dnjrEvtycJJS",
                  path: [
                    {
                      lat: -34.62899,
                      lng: -58.463640000000005,
                    },
                    {
                      lat: -34.62905,
                      lng: -58.46354,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.62899,
                      lng: -58.463640000000005,
                    },
                    {
                      lat: -34.62905,
                      lng: -58.46354,
                    },
                  ],
                  instructions:
                    'Toma la entrada <span class="location">S.J.Flores a San Pedrito y P.Mayo - Rivadavia 6969</span>',
                  maneuver: "",
                },
              ],
              travel_mode: "WALKING",
              encoded_lat_lngs:
                "bgjrEhvycJRfABCHIFG@EBC@E@E@IZJDONg@@@@?@?@?@?@?@A@??A@??A@??A@A?A?A?A@??A?AAAb@O?A?A?A?A?A?A?A?A?A@??A@A?A@??A@?@A@?@??A@?@?@??@@?@?@@@??@@@?@@??@@@LGFVBLBAJS",
              path: [
                {
                  lat: -34.627860000000005,
                  lng: -58.463890000000006,
                },
                {
                  lat: -34.62796,
                  lng: -58.46425000000001,
                },
                {
                  lat: -34.62798,
                  lng: -58.46423000000001,
                },
                {
                  lat: -34.62803,
                  lng: -58.464180000000006,
                },
                {
                  lat: -34.62807,
                  lng: -58.46414000000001,
                },
                {
                  lat: -34.628080000000004,
                  lng: -58.464110000000005,
                },
                {
                  lat: -34.6281,
                  lng: -58.464090000000006,
                },
                {
                  lat: -34.62811,
                  lng: -58.46406,
                },
                {
                  lat: -34.62812,
                  lng: -58.46403000000001,
                },
                {
                  lat: -34.628130000000006,
                  lng: -58.46398000000001,
                },
                {
                  lat: -34.62827,
                  lng: -58.464040000000004,
                },
                {
                  lat: -34.6283,
                  lng: -58.46396000000001,
                },
                {
                  lat: -34.62838,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.62839,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628400000000006,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62841,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628420000000006,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62843,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628440000000005,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62845,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.628460000000004,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.628460000000004,
                  lng: -58.463750000000005,
                },
                {
                  lat: -34.62847,
                  lng: -58.463750000000005,
                },
                {
                  lat: -34.62847,
                  lng: -58.46374,
                },
                {
                  lat: -34.62848,
                  lng: -58.46374,
                },
                {
                  lat: -34.62848,
                  lng: -58.463730000000005,
                },
                {
                  lat: -34.62849,
                  lng: -58.46372,
                },
                {
                  lat: -34.62849,
                  lng: -58.463710000000006,
                },
                {
                  lat: -34.62849,
                  lng: -58.4637,
                },
                {
                  lat: -34.62849,
                  lng: -58.46369000000001,
                },
                {
                  lat: -34.6285,
                  lng: -58.46369000000001,
                },
                {
                  lat: -34.6285,
                  lng: -58.463680000000004,
                },
                {
                  lat: -34.6285,
                  lng: -58.46367000000001,
                },
                {
                  lat: -34.62849,
                  lng: -58.463660000000004,
                },
                {
                  lat: -34.62867,
                  lng: -58.46358000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.463570000000004,
                },
                {
                  lat: -34.62867,
                  lng: -58.46356000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.463550000000005,
                },
                {
                  lat: -34.62867,
                  lng: -58.46354,
                },
                {
                  lat: -34.62867,
                  lng: -58.463530000000006,
                },
                {
                  lat: -34.62867,
                  lng: -58.46352,
                },
                {
                  lat: -34.62867,
                  lng: -58.46351000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.4635,
                },
                {
                  lat: -34.62867,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.62868,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.62868,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.628690000000006,
                  lng: -58.46347000000001,
                },
                {
                  lat: -34.628690000000006,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.6287,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.6287,
                  lng: -58.46345,
                },
                {
                  lat: -34.628710000000005,
                  lng: -58.46345,
                },
                {
                  lat: -34.62872,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628730000000004,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62874,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62874,
                  lng: -58.46343,
                },
                {
                  lat: -34.628750000000004,
                  lng: -58.46343,
                },
                {
                  lat: -34.62876,
                  lng: -58.46343,
                },
                {
                  lat: -34.62877,
                  lng: -58.46343,
                },
                {
                  lat: -34.62877,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628780000000006,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62879,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628800000000005,
                  lng: -58.46345,
                },
                {
                  lat: -34.62881,
                  lng: -58.46345,
                },
                {
                  lat: -34.62881,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.628820000000005,
                  lng: -58.46347000000001,
                },
                {
                  lat: -34.628820000000005,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.62883,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.62883,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.628840000000004,
                  lng: -58.4635,
                },
                {
                  lat: -34.628910000000005,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.62895,
                  lng: -58.46358000000001,
                },
                {
                  lat: -34.62897,
                  lng: -58.46365000000001,
                },
                {
                  lat: -34.62899,
                  lng: -58.463640000000005,
                },
                {
                  lat: -34.62905,
                  lng: -58.46354,
                },
              ],
              lat_lngs: [
                {
                  lat: -34.627860000000005,
                  lng: -58.463890000000006,
                },
                {
                  lat: -34.62796,
                  lng: -58.46425000000001,
                },
                {
                  lat: -34.62798,
                  lng: -58.46423000000001,
                },
                {
                  lat: -34.62803,
                  lng: -58.464180000000006,
                },
                {
                  lat: -34.62807,
                  lng: -58.46414000000001,
                },
                {
                  lat: -34.628080000000004,
                  lng: -58.464110000000005,
                },
                {
                  lat: -34.6281,
                  lng: -58.464090000000006,
                },
                {
                  lat: -34.62811,
                  lng: -58.46406,
                },
                {
                  lat: -34.62812,
                  lng: -58.46403000000001,
                },
                {
                  lat: -34.628130000000006,
                  lng: -58.46398000000001,
                },
                {
                  lat: -34.62827,
                  lng: -58.464040000000004,
                },
                {
                  lat: -34.6283,
                  lng: -58.46396000000001,
                },
                {
                  lat: -34.62838,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.62839,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628400000000006,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62841,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628420000000006,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62843,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.628440000000005,
                  lng: -58.463770000000004,
                },
                {
                  lat: -34.62845,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.628460000000004,
                  lng: -58.46376000000001,
                },
                {
                  lat: -34.628460000000004,
                  lng: -58.463750000000005,
                },
                {
                  lat: -34.62847,
                  lng: -58.463750000000005,
                },
                {
                  lat: -34.62847,
                  lng: -58.46374,
                },
                {
                  lat: -34.62848,
                  lng: -58.46374,
                },
                {
                  lat: -34.62848,
                  lng: -58.463730000000005,
                },
                {
                  lat: -34.62849,
                  lng: -58.46372,
                },
                {
                  lat: -34.62849,
                  lng: -58.463710000000006,
                },
                {
                  lat: -34.62849,
                  lng: -58.4637,
                },
                {
                  lat: -34.62849,
                  lng: -58.46369000000001,
                },
                {
                  lat: -34.6285,
                  lng: -58.46369000000001,
                },
                {
                  lat: -34.6285,
                  lng: -58.463680000000004,
                },
                {
                  lat: -34.6285,
                  lng: -58.46367000000001,
                },
                {
                  lat: -34.62849,
                  lng: -58.463660000000004,
                },
                {
                  lat: -34.62867,
                  lng: -58.46358000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.463570000000004,
                },
                {
                  lat: -34.62867,
                  lng: -58.46356000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.463550000000005,
                },
                {
                  lat: -34.62867,
                  lng: -58.46354,
                },
                {
                  lat: -34.62867,
                  lng: -58.463530000000006,
                },
                {
                  lat: -34.62867,
                  lng: -58.46352,
                },
                {
                  lat: -34.62867,
                  lng: -58.46351000000001,
                },
                {
                  lat: -34.62867,
                  lng: -58.4635,
                },
                {
                  lat: -34.62867,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.62868,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.62868,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.628690000000006,
                  lng: -58.46347000000001,
                },
                {
                  lat: -34.628690000000006,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.6287,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.6287,
                  lng: -58.46345,
                },
                {
                  lat: -34.628710000000005,
                  lng: -58.46345,
                },
                {
                  lat: -34.62872,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628730000000004,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62874,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62874,
                  lng: -58.46343,
                },
                {
                  lat: -34.628750000000004,
                  lng: -58.46343,
                },
                {
                  lat: -34.62876,
                  lng: -58.46343,
                },
                {
                  lat: -34.62877,
                  lng: -58.46343,
                },
                {
                  lat: -34.62877,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628780000000006,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.62879,
                  lng: -58.463440000000006,
                },
                {
                  lat: -34.628800000000005,
                  lng: -58.46345,
                },
                {
                  lat: -34.62881,
                  lng: -58.46345,
                },
                {
                  lat: -34.62881,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.628820000000005,
                  lng: -58.46347000000001,
                },
                {
                  lat: -34.628820000000005,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.62883,
                  lng: -58.463480000000004,
                },
                {
                  lat: -34.62883,
                  lng: -58.46349000000001,
                },
                {
                  lat: -34.628840000000004,
                  lng: -58.4635,
                },
                {
                  lat: -34.628910000000005,
                  lng: -58.463460000000005,
                },
                {
                  lat: -34.62895,
                  lng: -58.46358000000001,
                },
                {
                  lat: -34.62897,
                  lng: -58.46365000000001,
                },
                {
                  lat: -34.62899,
                  lng: -58.463640000000005,
                },
                {
                  lat: -34.62905,
                  lng: -58.46354,
                },
              ],
              instructions: "Camina hasta San Jose de Flores",
              maneuver: "",
              start_point: {
                lat: -34.6278643,
                lng: -58.4638948,
              },
              end_point: {
                lat: -34.62905,
                lng: -58.46353999999999,
              },
            },
            {
              distance: {
                text: "5,7 km",
                value: 5728,
              },
              duration: {
                text: "15 min",
                value: 877,
              },
              end_location: {
                lat: -34.609688,
                lng: -58.40681389999999,
              },
              polyline: {
                points:
                  "pnjrEbtycJUJU{@YiBMuAE]AKOgBMqAAEMe@S{@e@cBG[I[yA}DEIiAcEe@eBg@aB{@sCK_@o@sBkBcGAGg@gBe@gB{AkF{AkF]kAa@kAi@{Bg@gBGSSq@Ss@_AkDAGKYKWk@sBm@qBq@aCc@y@a@kACGe@yAg@yA]eAe@gAq@eCy@iCMc@EMuA_EiAuCs@gByAuD[eA}AwEK[Oc@Ww@IWQg@a@iA[_Aa@mAm@eB]cAoAuD}@oCaAoC[_A_ByEaAwCOe@]cA]aAyAmEgBoF[cA_@iA_CyGaB{Ec@oAoAqDM_@c@{A[oAYuA?AG[E]Iu@CK?GAMGcACa@A]CsACg@EsCEq@KeCAQMqCM_CImACu@GmCGkCEiCEgCEiCEiCEwCQoBAKCECEOMSQW[_@a@e@gB?}ARwAPa@IG",
              },
              start_location: {
                lat: -34.62905,
                lng: -58.46353999999999,
              },
              travel_mode: "TRANSIT",
              encoded_lat_lngs:
                "pnjrEbtycJUJU{@YiBMuAE]AKOgBMqAAEMe@S{@e@cBG[I[yA}DEIiAcEe@eBg@aB{@sCK_@o@sBkBcGAGg@gBe@gB{AkF{AkF]kAa@kAi@{Bg@gBGSSq@Ss@_AkDAGKYKWk@sBm@qBq@aCc@y@a@kACGe@yAg@yA]eAe@gAq@eCy@iCMc@EMuA_EiAuCs@gByAuD[eA}AwEK[Oc@Ww@IWQg@a@iA[_Aa@mAm@eB]cAoAuD}@oCaAoC[_A_ByEaAwCOe@]cA]aAyAmEgBoF[cA_@iA_CyGaB{Ec@oAoAqDM_@c@{A[oAYuA?AG[E]Iu@CK?GAMGcACa@A]CsACg@EsCEq@KeCAQMqCM_CImACu@GmCGkCEiCEgCEiCEiCEwCQoBAKCECEOMSQW[_@a@e@gB?}ARwAPa@IG",
              path: [
                {
                  lat: -34.62905,
                  lng: -58.46354,
                },
                {
                  lat: -34.62894,
                  lng: -58.46360000000001,
                },
                {
                  lat: -34.62883,
                  lng: -58.463300000000004,
                },
                {
                  lat: -34.6287,
                  lng: -58.462770000000006,
                },
                {
                  lat: -34.62863,
                  lng: -58.462340000000005,
                },
                {
                  lat: -34.628600000000006,
                  lng: -58.46219000000001,
                },
                {
                  lat: -34.62859,
                  lng: -58.46213,
                },
                {
                  lat: -34.628510000000006,
                  lng: -58.46161000000001,
                },
                {
                  lat: -34.628440000000005,
                  lng: -58.461200000000005,
                },
                {
                  lat: -34.62843,
                  lng: -58.46117,
                },
                {
                  lat: -34.62836,
                  lng: -58.460980000000006,
                },
                {
                  lat: -34.628260000000004,
                  lng: -58.46068,
                },
                {
                  lat: -34.62807,
                  lng: -58.46018000000001,
                },
                {
                  lat: -34.62803,
                  lng: -58.460040000000006,
                },
                {
                  lat: -34.62798,
                  lng: -58.459900000000005,
                },
                {
                  lat: -34.62753,
                  lng: -58.45895,
                },
                {
                  lat: -34.627500000000005,
                  lng: -58.45890000000001,
                },
                {
                  lat: -34.62713,
                  lng: -58.45792,
                },
                {
                  lat: -34.626940000000005,
                  lng: -58.45741,
                },
                {
                  lat: -34.626740000000005,
                  lng: -58.456920000000004,
                },
                {
                  lat: -34.62644,
                  lng: -58.45618,
                },
                {
                  lat: -34.626380000000005,
                  lng: -58.45602,
                },
                {
                  lat: -34.62614,
                  lng: -58.45544,
                },
                {
                  lat: -34.625600000000006,
                  lng: -58.45414,
                },
                {
                  lat: -34.62559,
                  lng: -58.454100000000004,
                },
                {
                  lat: -34.62539,
                  lng: -58.45358,
                },
                {
                  lat: -34.6252,
                  lng: -58.45306000000001,
                },
                {
                  lat: -34.62474,
                  lng: -58.45188,
                },
                {
                  lat: -34.624280000000006,
                  lng: -58.450700000000005,
                },
                {
                  lat: -34.62413,
                  lng: -58.450320000000005,
                },
                {
                  lat: -34.623960000000004,
                  lng: -58.449940000000005,
                },
                {
                  lat: -34.62375,
                  lng: -58.44932000000001,
                },
                {
                  lat: -34.62355,
                  lng: -58.448800000000006,
                },
                {
                  lat: -34.62351,
                  lng: -58.4487,
                },
                {
                  lat: -34.62341,
                  lng: -58.44845000000001,
                },
                {
                  lat: -34.623310000000004,
                  lng: -58.448190000000004,
                },
                {
                  lat: -34.62299,
                  lng: -58.44733000000001,
                },
                {
                  lat: -34.622980000000005,
                  lng: -58.44729,
                },
                {
                  lat: -34.62292,
                  lng: -58.447160000000004,
                },
                {
                  lat: -34.62286,
                  lng: -58.44704000000001,
                },
                {
                  lat: -34.622640000000004,
                  lng: -58.44646,
                },
                {
                  lat: -34.62241,
                  lng: -58.445890000000006,
                },
                {
                  lat: -34.62216,
                  lng: -58.445240000000005,
                },
                {
                  lat: -34.62198,
                  lng: -58.444950000000006,
                },
                {
                  lat: -34.62181,
                  lng: -58.444570000000006,
                },
                {
                  lat: -34.621790000000004,
                  lng: -58.44453000000001,
                },
                {
                  lat: -34.6216,
                  lng: -58.44408000000001,
                },
                {
                  lat: -34.6214,
                  lng: -58.443630000000006,
                },
                {
                  lat: -34.62125,
                  lng: -58.44328,
                },
                {
                  lat: -34.62106,
                  lng: -58.44292000000001,
                },
                {
                  lat: -34.620810000000006,
                  lng: -58.44225,
                },
                {
                  lat: -34.620520000000006,
                  lng: -58.44156,
                },
                {
                  lat: -34.620450000000005,
                  lng: -58.44138,
                },
                {
                  lat: -34.62042,
                  lng: -58.44131,
                },
                {
                  lat: -34.61999,
                  lng: -58.44035,
                },
                {
                  lat: -34.619620000000005,
                  lng: -58.439600000000006,
                },
                {
                  lat: -34.61936,
                  lng: -58.439080000000004,
                },
                {
                  lat: -34.61891,
                  lng: -58.43817000000001,
                },
                {
                  lat: -34.618770000000005,
                  lng: -58.43782,
                },
                {
                  lat: -34.618300000000005,
                  lng: -58.43674000000001,
                },
                {
                  lat: -34.61824,
                  lng: -58.436600000000006,
                },
                {
                  lat: -34.61816,
                  lng: -58.436420000000005,
                },
                {
                  lat: -34.61804,
                  lng: -58.43614,
                },
                {
                  lat: -34.617990000000006,
                  lng: -58.436020000000006,
                },
                {
                  lat: -34.617900000000006,
                  lng: -58.43582000000001,
                },
                {
                  lat: -34.61773,
                  lng: -58.43545,
                },
                {
                  lat: -34.61759,
                  lng: -58.43513000000001,
                },
                {
                  lat: -34.61742,
                  lng: -58.434740000000005,
                },
                {
                  lat: -34.61719,
                  lng: -58.43423000000001,
                },
                {
                  lat: -34.61704,
                  lng: -58.433890000000005,
                },
                {
                  lat: -34.616640000000004,
                  lng: -58.43298000000001,
                },
                {
                  lat: -34.616330000000005,
                  lng: -58.43226000000001,
                },
                {
                  lat: -34.616,
                  lng: -58.431540000000005,
                },
                {
                  lat: -34.615860000000005,
                  lng: -58.43122,
                },
                {
                  lat: -34.61538,
                  lng: -58.430130000000005,
                },
                {
                  lat: -34.615050000000004,
                  lng: -58.429370000000006,
                },
                {
                  lat: -34.61497,
                  lng: -58.42918,
                },
                {
                  lat: -34.61482,
                  lng: -58.42884000000001,
                },
                {
                  lat: -34.614670000000004,
                  lng: -58.42851,
                },
                {
                  lat: -34.61422,
                  lng: -58.42748,
                },
                {
                  lat: -34.6137,
                  lng: -58.426280000000006,
                },
                {
                  lat: -34.61356,
                  lng: -58.425940000000004,
                },
                {
                  lat: -34.613400000000006,
                  lng: -58.42557000000001,
                },
                {
                  lat: -34.61276,
                  lng: -58.42416000000001,
                },
                {
                  lat: -34.61227,
                  lng: -58.42306000000001,
                },
                {
                  lat: -34.61209,
                  lng: -58.42266000000001,
                },
                {
                  lat: -34.61169,
                  lng: -58.42177,
                },
                {
                  lat: -34.61162,
                  lng: -58.42161000000001,
                },
                {
                  lat: -34.61144,
                  lng: -58.421150000000004,
                },
                {
                  lat: -34.6113,
                  lng: -58.420750000000005,
                },
                {
                  lat: -34.61117,
                  lng: -58.420320000000004,
                },
                {
                  lat: -34.61117,
                  lng: -58.42031000000001,
                },
                {
                  lat: -34.61113,
                  lng: -58.420170000000006,
                },
                {
                  lat: -34.6111,
                  lng: -58.42002000000001,
                },
                {
                  lat: -34.611050000000006,
                  lng: -58.41975000000001,
                },
                {
                  lat: -34.61103,
                  lng: -58.41969,
                },
                {
                  lat: -34.61103,
                  lng: -58.419650000000004,
                },
                {
                  lat: -34.61102,
                  lng: -58.41958,
                },
                {
                  lat: -34.610980000000005,
                  lng: -58.41924,
                },
                {
                  lat: -34.610960000000006,
                  lng: -58.419070000000005,
                },
                {
                  lat: -34.61095,
                  lng: -58.41892000000001,
                },
                {
                  lat: -34.61093,
                  lng: -58.4185,
                },
                {
                  lat: -34.610910000000004,
                  lng: -58.4183,
                },
                {
                  lat: -34.61088,
                  lng: -58.41756,
                },
                {
                  lat: -34.610850000000006,
                  lng: -58.41731000000001,
                },
                {
                  lat: -34.61079,
                  lng: -58.41664000000001,
                },
                {
                  lat: -34.610780000000005,
                  lng: -58.41655000000001,
                },
                {
                  lat: -34.610710000000005,
                  lng: -58.415820000000004,
                },
                {
                  lat: -34.610640000000004,
                  lng: -58.41518000000001,
                },
                {
                  lat: -34.61059,
                  lng: -58.41479,
                },
                {
                  lat: -34.61057,
                  lng: -58.41452,
                },
                {
                  lat: -34.610530000000004,
                  lng: -58.413810000000005,
                },
                {
                  lat: -34.610490000000006,
                  lng: -58.41311,
                },
                {
                  lat: -34.61046,
                  lng: -58.412420000000004,
                },
                {
                  lat: -34.61043,
                  lng: -58.41174,
                },
                {
                  lat: -34.610400000000006,
                  lng: -58.41105,
                },
                {
                  lat: -34.61037,
                  lng: -58.410360000000004,
                },
                {
                  lat: -34.61034,
                  lng: -58.409600000000005,
                },
                {
                  lat: -34.61025,
                  lng: -58.409040000000005,
                },
                {
                  lat: -34.610240000000005,
                  lng: -58.40898000000001,
                },
                {
                  lat: -34.610220000000005,
                  lng: -58.408950000000004,
                },
                {
                  lat: -34.610200000000006,
                  lng: -58.40892,
                },
                {
                  lat: -34.61012,
                  lng: -58.40885000000001,
                },
                {
                  lat: -34.610020000000006,
                  lng: -58.40876000000001,
                },
                {
                  lat: -34.6099,
                  lng: -58.408620000000006,
                },
                {
                  lat: -34.60974,
                  lng: -58.40845,
                },
                {
                  lat: -34.609550000000006,
                  lng: -58.40793000000001,
                },
                {
                  lat: -34.609550000000006,
                  lng: -58.40746000000001,
                },
                {
                  lat: -34.60965,
                  lng: -58.40702,
                },
                {
                  lat: -34.60974,
                  lng: -58.406850000000006,
                },
                {
                  lat: -34.60969,
                  lng: -58.40681000000001,
                },
              ],
              lat_lngs: [
                {
                  lat: -34.62905,
                  lng: -58.46354,
                },
                {
                  lat: -34.62894,
                  lng: -58.46360000000001,
                },
                {
                  lat: -34.62883,
                  lng: -58.463300000000004,
                },
                {
                  lat: -34.6287,
                  lng: -58.462770000000006,
                },
                {
                  lat: -34.62863,
                  lng: -58.462340000000005,
                },
                {
                  lat: -34.628600000000006,
                  lng: -58.46219000000001,
                },
                {
                  lat: -34.62859,
                  lng: -58.46213,
                },
                {
                  lat: -34.628510000000006,
                  lng: -58.46161000000001,
                },
                {
                  lat: -34.628440000000005,
                  lng: -58.461200000000005,
                },
                {
                  lat: -34.62843,
                  lng: -58.46117,
                },
                {
                  lat: -34.62836,
                  lng: -58.460980000000006,
                },
                {
                  lat: -34.628260000000004,
                  lng: -58.46068,
                },
                {
                  lat: -34.62807,
                  lng: -58.46018000000001,
                },
                {
                  lat: -34.62803,
                  lng: -58.460040000000006,
                },
                {
                  lat: -34.62798,
                  lng: -58.459900000000005,
                },
                {
                  lat: -34.62753,
                  lng: -58.45895,
                },
                {
                  lat: -34.627500000000005,
                  lng: -58.45890000000001,
                },
                {
                  lat: -34.62713,
                  lng: -58.45792,
                },
                {
                  lat: -34.626940000000005,
                  lng: -58.45741,
                },
                {
                  lat: -34.626740000000005,
                  lng: -58.456920000000004,
                },
                {
                  lat: -34.62644,
                  lng: -58.45618,
                },
                {
                  lat: -34.626380000000005,
                  lng: -58.45602,
                },
                {
                  lat: -34.62614,
                  lng: -58.45544,
                },
                {
                  lat: -34.625600000000006,
                  lng: -58.45414,
                },
                {
                  lat: -34.62559,
                  lng: -58.454100000000004,
                },
                {
                  lat: -34.62539,
                  lng: -58.45358,
                },
                {
                  lat: -34.6252,
                  lng: -58.45306000000001,
                },
                {
                  lat: -34.62474,
                  lng: -58.45188,
                },
                {
                  lat: -34.624280000000006,
                  lng: -58.450700000000005,
                },
                {
                  lat: -34.62413,
                  lng: -58.450320000000005,
                },
                {
                  lat: -34.623960000000004,
                  lng: -58.449940000000005,
                },
                {
                  lat: -34.62375,
                  lng: -58.44932000000001,
                },
                {
                  lat: -34.62355,
                  lng: -58.448800000000006,
                },
                {
                  lat: -34.62351,
                  lng: -58.4487,
                },
                {
                  lat: -34.62341,
                  lng: -58.44845000000001,
                },
                {
                  lat: -34.623310000000004,
                  lng: -58.448190000000004,
                },
                {
                  lat: -34.62299,
                  lng: -58.44733000000001,
                },
                {
                  lat: -34.622980000000005,
                  lng: -58.44729,
                },
                {
                  lat: -34.62292,
                  lng: -58.447160000000004,
                },
                {
                  lat: -34.62286,
                  lng: -58.44704000000001,
                },
                {
                  lat: -34.622640000000004,
                  lng: -58.44646,
                },
                {
                  lat: -34.62241,
                  lng: -58.445890000000006,
                },
                {
                  lat: -34.62216,
                  lng: -58.445240000000005,
                },
                {
                  lat: -34.62198,
                  lng: -58.444950000000006,
                },
                {
                  lat: -34.62181,
                  lng: -58.444570000000006,
                },
                {
                  lat: -34.621790000000004,
                  lng: -58.44453000000001,
                },
                {
                  lat: -34.6216,
                  lng: -58.44408000000001,
                },
                {
                  lat: -34.6214,
                  lng: -58.443630000000006,
                },
                {
                  lat: -34.62125,
                  lng: -58.44328,
                },
                {
                  lat: -34.62106,
                  lng: -58.44292000000001,
                },
                {
                  lat: -34.620810000000006,
                  lng: -58.44225,
                },
                {
                  lat: -34.620520000000006,
                  lng: -58.44156,
                },
                {
                  lat: -34.620450000000005,
                  lng: -58.44138,
                },
                {
                  lat: -34.62042,
                  lng: -58.44131,
                },
                {
                  lat: -34.61999,
                  lng: -58.44035,
                },
                {
                  lat: -34.619620000000005,
                  lng: -58.439600000000006,
                },
                {
                  lat: -34.61936,
                  lng: -58.439080000000004,
                },
                {
                  lat: -34.61891,
                  lng: -58.43817000000001,
                },
                {
                  lat: -34.618770000000005,
                  lng: -58.43782,
                },
                {
                  lat: -34.618300000000005,
                  lng: -58.43674000000001,
                },
                {
                  lat: -34.61824,
                  lng: -58.436600000000006,
                },
                {
                  lat: -34.61816,
                  lng: -58.436420000000005,
                },
                {
                  lat: -34.61804,
                  lng: -58.43614,
                },
                {
                  lat: -34.617990000000006,
                  lng: -58.436020000000006,
                },
                {
                  lat: -34.617900000000006,
                  lng: -58.43582000000001,
                },
                {
                  lat: -34.61773,
                  lng: -58.43545,
                },
                {
                  lat: -34.61759,
                  lng: -58.43513000000001,
                },
                {
                  lat: -34.61742,
                  lng: -58.434740000000005,
                },
                {
                  lat: -34.61719,
                  lng: -58.43423000000001,
                },
                {
                  lat: -34.61704,
                  lng: -58.433890000000005,
                },
                {
                  lat: -34.616640000000004,
                  lng: -58.43298000000001,
                },
                {
                  lat: -34.616330000000005,
                  lng: -58.43226000000001,
                },
                {
                  lat: -34.616,
                  lng: -58.431540000000005,
                },
                {
                  lat: -34.615860000000005,
                  lng: -58.43122,
                },
                {
                  lat: -34.61538,
                  lng: -58.430130000000005,
                },
                {
                  lat: -34.615050000000004,
                  lng: -58.429370000000006,
                },
                {
                  lat: -34.61497,
                  lng: -58.42918,
                },
                {
                  lat: -34.61482,
                  lng: -58.42884000000001,
                },
                {
                  lat: -34.614670000000004,
                  lng: -58.42851,
                },
                {
                  lat: -34.61422,
                  lng: -58.42748,
                },
                {
                  lat: -34.6137,
                  lng: -58.426280000000006,
                },
                {
                  lat: -34.61356,
                  lng: -58.425940000000004,
                },
                {
                  lat: -34.613400000000006,
                  lng: -58.42557000000001,
                },
                {
                  lat: -34.61276,
                  lng: -58.42416000000001,
                },
                {
                  lat: -34.61227,
                  lng: -58.42306000000001,
                },
                {
                  lat: -34.61209,
                  lng: -58.42266000000001,
                },
                {
                  lat: -34.61169,
                  lng: -58.42177,
                },
                {
                  lat: -34.61162,
                  lng: -58.42161000000001,
                },
                {
                  lat: -34.61144,
                  lng: -58.421150000000004,
                },
                {
                  lat: -34.6113,
                  lng: -58.420750000000005,
                },
                {
                  lat: -34.61117,
                  lng: -58.420320000000004,
                },
                {
                  lat: -34.61117,
                  lng: -58.42031000000001,
                },
                {
                  lat: -34.61113,
                  lng: -58.420170000000006,
                },
                {
                  lat: -34.6111,
                  lng: -58.42002000000001,
                },
                {
                  lat: -34.611050000000006,
                  lng: -58.41975000000001,
                },
                {
                  lat: -34.61103,
                  lng: -58.41969,
                },
                {
                  lat: -34.61103,
                  lng: -58.419650000000004,
                },
                {
                  lat: -34.61102,
                  lng: -58.41958,
                },
                {
                  lat: -34.610980000000005,
                  lng: -58.41924,
                },
                {
                  lat: -34.610960000000006,
                  lng: -58.419070000000005,
                },
                {
                  lat: -34.61095,
                  lng: -58.41892000000001,
                },
                {
                  lat: -34.61093,
                  lng: -58.4185,
                },
                {
                  lat: -34.610910000000004,
                  lng: -58.4183,
                },
                {
                  lat: -34.61088,
                  lng: -58.41756,
                },
                {
                  lat: -34.610850000000006,
                  lng: -58.41731000000001,
                },
                {
                  lat: -34.61079,
                  lng: -58.41664000000001,
                },
                {
                  lat: -34.610780000000005,
                  lng: -58.41655000000001,
                },
                {
                  lat: -34.610710000000005,
                  lng: -58.415820000000004,
                },
                {
                  lat: -34.610640000000004,
                  lng: -58.41518000000001,
                },
                {
                  lat: -34.61059,
                  lng: -58.41479,
                },
                {
                  lat: -34.61057,
                  lng: -58.41452,
                },
                {
                  lat: -34.610530000000004,
                  lng: -58.413810000000005,
                },
                {
                  lat: -34.610490000000006,
                  lng: -58.41311,
                },
                {
                  lat: -34.61046,
                  lng: -58.412420000000004,
                },
                {
                  lat: -34.61043,
                  lng: -58.41174,
                },
                {
                  lat: -34.610400000000006,
                  lng: -58.41105,
                },
                {
                  lat: -34.61037,
                  lng: -58.410360000000004,
                },
                {
                  lat: -34.61034,
                  lng: -58.409600000000005,
                },
                {
                  lat: -34.61025,
                  lng: -58.409040000000005,
                },
                {
                  lat: -34.610240000000005,
                  lng: -58.40898000000001,
                },
                {
                  lat: -34.610220000000005,
                  lng: -58.408950000000004,
                },
                {
                  lat: -34.610200000000006,
                  lng: -58.40892,
                },
                {
                  lat: -34.61012,
                  lng: -58.40885000000001,
                },
                {
                  lat: -34.610020000000006,
                  lng: -58.40876000000001,
                },
                {
                  lat: -34.6099,
                  lng: -58.408620000000006,
                },
                {
                  lat: -34.60974,
                  lng: -58.40845,
                },
                {
                  lat: -34.609550000000006,
                  lng: -58.40793000000001,
                },
                {
                  lat: -34.609550000000006,
                  lng: -58.40746000000001,
                },
                {
                  lat: -34.60965,
                  lng: -58.40702,
                },
                {
                  lat: -34.60974,
                  lng: -58.406850000000006,
                },
                {
                  lat: -34.60969,
                  lng: -58.40681000000001,
                },
              ],
              instructions: "Metro en dirección a Plaza de Mayo",
              maneuver: "",
              start_point: {
                lat: -34.62905,
                lng: -58.46353999999999,
              },
              end_point: {
                lat: -34.609688,
                lng: -58.40681389999999,
              },
              transit: {
                arrival_stop: {
                  location: {
                    lat: -34.609688,
                    lng: -58.40681389999999,
                  },
                  name: "Plaza Miserere",
                },
                arrival_time: {
                  text: "10:59",
                  time_zone: "America/Buenos_Aires",
                  value: "2024-08-13T13:59:40.000Z",
                },
                departure_stop: {
                  location: {
                    lat: -34.62905,
                    lng: -58.46353999999999,
                  },
                  name: "San Jose de Flores",
                },
                departure_time: {
                  text: "10:45",
                  time_zone: "America/Buenos_Aires",
                  value: "2024-08-13T13:45:03.000Z",
                },
                headsign: "Plaza de Mayo",
                line: {
                  agencies: [
                    {
                      name: "Subte de Buenos Aires",
                      phone: "0800-333-6682",
                      url: "http://www.buenosaires.gob.ar/subte",
                    },
                  ],
                  color: "#0093d0",
                  name: "Plaza de Mayo - San Pedrito",
                  short_name: "A",
                  text_color: "#ffffff",
                  vehicle: {
                    icon: "https://maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png",
                    local_icon:
                      "https://maps.gstatic.com/mapfiles/transit/iw2/6/ar-subte.png",
                    name: "Metro",
                    type: "SUBWAY",
                  },
                },
                num_stops: 8,
              },
            },
            {
              distance: {
                text: "0,2 km",
                value: 165,
              },
              duration: {
                text: "1 min",
                value: 60,
              },
              end_location: {
                lat: -34.6101685,
                lng: -58.40760059999999,
              },
              polyline: {
                points: "pufrEpqncJz@uAb@rF",
              },
              start_location: {
                lat: -34.609688,
                lng: -58.40681389999999,
              },
              steps: [
                {
                  distance: {
                    text: "52 m",
                    value: 52,
                  },
                  duration: {
                    text: "1 min",
                    value: 53,
                  },
                  end_location: {
                    lat: -34.6099895,
                    lng: -58.4063787,
                  },
                  polyline: {
                    points: "pufrEpqncJz@uA",
                  },
                  start_location: {
                    lat: -34.609688,
                    lng: -58.40681389999999,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "pufrEpqncJz@uA",
                  path: [
                    {
                      lat: -34.60969,
                      lng: -58.40681000000001,
                    },
                    {
                      lat: -34.60999,
                      lng: -58.406380000000006,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.60969,
                      lng: -58.40681000000001,
                    },
                    {
                      lat: -34.60999,
                      lng: -58.406380000000006,
                    },
                  ],
                  instructions:
                    'Toma la salida <span class="location">P.Miserere a P.Mayo y San Pedrito - Rivadavia 2801</span>',
                  maneuver: "",
                },
                {
                  distance: {
                    text: "0,1 km",
                    value: 113,
                  },
                  duration: {
                    text: "1 min",
                    value: 7,
                  },
                  end_location: {
                    lat: -34.6101685,
                    lng: -58.40760059999999,
                  },
                  polyline: {
                    points: "lwfrEznncJb@rF",
                  },
                  start_location: {
                    lat: -34.6099895,
                    lng: -58.4063787,
                  },
                  travel_mode: "WALKING",
                  encoded_lat_lngs: "lwfrEznncJb@rF",
                  path: [
                    {
                      lat: -34.60999,
                      lng: -58.406380000000006,
                    },
                    {
                      lat: -34.610170000000004,
                      lng: -58.4076,
                    },
                  ],
                  lat_lngs: [
                    {
                      lat: -34.60999,
                      lng: -58.406380000000006,
                    },
                    {
                      lat: -34.610170000000004,
                      lng: -58.4076,
                    },
                  ],
                  maneuver: "",
                },
              ],
              travel_mode: "WALKING",
              encoded_lat_lngs: "pufrEpqncJz@uAb@rF",
              path: [
                {
                  lat: -34.60969,
                  lng: -58.40681000000001,
                },
                {
                  lat: -34.60999,
                  lng: -58.406380000000006,
                },
                {
                  lat: -34.610170000000004,
                  lng: -58.4076,
                },
              ],
              lat_lngs: [
                {
                  lat: -34.60969,
                  lng: -58.40681000000001,
                },
                {
                  lat: -34.60999,
                  lng: -58.406380000000006,
                },
                {
                  lat: -34.610170000000004,
                  lng: -58.4076,
                },
              ],
              instructions:
                "Camina hasta Plaza Miserere, Bartolomé Mitre 2819, C1203 Cdad. Autónoma de Buenos Aires, Argentina",
              maneuver: "",
              start_point: {
                lat: -34.609688,
                lng: -58.40681389999999,
              },
              end_point: {
                lat: -34.6101685,
                lng: -58.40760059999999,
              },
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
          via_waypoints: [],
        },
      ],
      overview_polyline:
        "bgjrEhvycJRfABCPQHU@IZJTw@B@B?DAFI@EACb@Q?A?A?C?EHKJ?FD@BNEJd@NUUJU{@YiBMuAGi@]yDOk@y@_DQw@yA}DoAmEiC{IiD_LeGgT_AwCqAcFoBeHeAmD_BsFc@y@a@kAi@aBeA_De@gAq@eCgAmD{AmE}B}FuB{FiBsFcA{CmC}HmFyOmEwM}FcQ}GcSsBaGq@{Bu@eDG]SgBOqCSaIi@iLMcCOyGWePEwCQoBEQ_AaA_@a@e@gB?}ARwAPa@IGz@uAb@rF",
      summary: "",
      warnings: [
        "Las rutas a pie están en versión beta. Ten cuidado. –  En esta ruta puede que no haya aceras o pasos para peatones.",
      ],
      waypoint_order: [],
      overview_path: [
        {
          lat: -34.627860000000005,
          lng: -58.463890000000006,
        },
        {
          lat: -34.62796,
          lng: -58.46425000000001,
        },
        {
          lat: -34.62798,
          lng: -58.46423000000001,
        },
        {
          lat: -34.62807,
          lng: -58.46414000000001,
        },
        {
          lat: -34.62812,
          lng: -58.46403000000001,
        },
        {
          lat: -34.628130000000006,
          lng: -58.46398000000001,
        },
        {
          lat: -34.62827,
          lng: -58.464040000000004,
        },
        {
          lat: -34.62838,
          lng: -58.46376000000001,
        },
        {
          lat: -34.628400000000006,
          lng: -58.463770000000004,
        },
        {
          lat: -34.628420000000006,
          lng: -58.463770000000004,
        },
        {
          lat: -34.62845,
          lng: -58.46376000000001,
        },
        {
          lat: -34.62849,
          lng: -58.463710000000006,
        },
        {
          lat: -34.6285,
          lng: -58.463680000000004,
        },
        {
          lat: -34.62849,
          lng: -58.463660000000004,
        },
        {
          lat: -34.62867,
          lng: -58.463570000000004,
        },
        {
          lat: -34.62867,
          lng: -58.46356000000001,
        },
        {
          lat: -34.62867,
          lng: -58.463550000000005,
        },
        {
          lat: -34.62867,
          lng: -58.463530000000006,
        },
        {
          lat: -34.62867,
          lng: -58.4635,
        },
        {
          lat: -34.62872,
          lng: -58.463440000000006,
        },
        {
          lat: -34.628780000000006,
          lng: -58.463440000000006,
        },
        {
          lat: -34.628820000000005,
          lng: -58.46347000000001,
        },
        {
          lat: -34.62883,
          lng: -58.46349000000001,
        },
        {
          lat: -34.628910000000005,
          lng: -58.463460000000005,
        },
        {
          lat: -34.62897,
          lng: -58.46365000000001,
        },
        {
          lat: -34.62905,
          lng: -58.46354,
        },
        {
          lat: -34.62894,
          lng: -58.46360000000001,
        },
        {
          lat: -34.62883,
          lng: -58.463300000000004,
        },
        {
          lat: -34.6287,
          lng: -58.462770000000006,
        },
        {
          lat: -34.62863,
          lng: -58.462340000000005,
        },
        {
          lat: -34.62859,
          lng: -58.46213,
        },
        {
          lat: -34.628440000000005,
          lng: -58.461200000000005,
        },
        {
          lat: -34.62836,
          lng: -58.460980000000006,
        },
        {
          lat: -34.62807,
          lng: -58.46018000000001,
        },
        {
          lat: -34.62798,
          lng: -58.459900000000005,
        },
        {
          lat: -34.62753,
          lng: -58.45895,
        },
        {
          lat: -34.62713,
          lng: -58.45792,
        },
        {
          lat: -34.62644,
          lng: -58.45618,
        },
        {
          lat: -34.62559,
          lng: -58.454100000000004,
        },
        {
          lat: -34.624280000000006,
          lng: -58.450700000000005,
        },
        {
          lat: -34.623960000000004,
          lng: -58.449940000000005,
        },
        {
          lat: -34.62355,
          lng: -58.448800000000006,
        },
        {
          lat: -34.62299,
          lng: -58.44733000000001,
        },
        {
          lat: -34.622640000000004,
          lng: -58.44646,
        },
        {
          lat: -34.62216,
          lng: -58.445240000000005,
        },
        {
          lat: -34.62198,
          lng: -58.444950000000006,
        },
        {
          lat: -34.62181,
          lng: -58.444570000000006,
        },
        {
          lat: -34.6216,
          lng: -58.44408000000001,
        },
        {
          lat: -34.62125,
          lng: -58.44328,
        },
        {
          lat: -34.62106,
          lng: -58.44292000000001,
        },
        {
          lat: -34.620810000000006,
          lng: -58.44225,
        },
        {
          lat: -34.620450000000005,
          lng: -58.44138,
        },
        {
          lat: -34.61999,
          lng: -58.44035,
        },
        {
          lat: -34.61936,
          lng: -58.439080000000004,
        },
        {
          lat: -34.618770000000005,
          lng: -58.43782,
        },
        {
          lat: -34.61824,
          lng: -58.436600000000006,
        },
        {
          lat: -34.617900000000006,
          lng: -58.43582000000001,
        },
        {
          lat: -34.61719,
          lng: -58.43423000000001,
        },
        {
          lat: -34.616,
          lng: -58.431540000000005,
        },
        {
          lat: -34.61497,
          lng: -58.42918,
        },
        {
          lat: -34.6137,
          lng: -58.426280000000006,
        },
        {
          lat: -34.61227,
          lng: -58.42306000000001,
        },
        {
          lat: -34.61169,
          lng: -58.42177,
        },
        {
          lat: -34.61144,
          lng: -58.421150000000004,
        },
        {
          lat: -34.61117,
          lng: -58.420320000000004,
        },
        {
          lat: -34.61113,
          lng: -58.420170000000006,
        },
        {
          lat: -34.61103,
          lng: -58.419650000000004,
        },
        {
          lat: -34.61095,
          lng: -58.41892000000001,
        },
        {
          lat: -34.610850000000006,
          lng: -58.41731000000001,
        },
        {
          lat: -34.610640000000004,
          lng: -58.41518000000001,
        },
        {
          lat: -34.61057,
          lng: -58.41452,
        },
        {
          lat: -34.610490000000006,
          lng: -58.41311,
        },
        {
          lat: -34.61037,
          lng: -58.410360000000004,
        },
        {
          lat: -34.61034,
          lng: -58.409600000000005,
        },
        {
          lat: -34.61025,
          lng: -58.409040000000005,
        },
        {
          lat: -34.610220000000005,
          lng: -58.408950000000004,
        },
        {
          lat: -34.6099,
          lng: -58.408620000000006,
        },
        {
          lat: -34.60974,
          lng: -58.40845,
        },
        {
          lat: -34.609550000000006,
          lng: -58.40793000000001,
        },
        {
          lat: -34.609550000000006,
          lng: -58.40746000000001,
        },
        {
          lat: -34.60965,
          lng: -58.40702,
        },
        {
          lat: -34.60974,
          lng: -58.406850000000006,
        },
        {
          lat: -34.60969,
          lng: -58.40681000000001,
        },
        {
          lat: -34.60999,
          lng: -58.406380000000006,
        },
        {
          lat: -34.610170000000004,
          lng: -58.4076,
        },
      ],
    },
  ],
  status: "OK",
  request: {
    origin: {
      placeId: "ChIJo699xYnJvJURZBHg3Cpfswo",
    },
    destination: {
      placeId: "ChIJoa3_DvLKvJURG2wTnGe8du0",
    },
    travelMode: "TRANSIT",
    transitOptions: {
      modes: ["SUBWAY"],
    },
  },
};
