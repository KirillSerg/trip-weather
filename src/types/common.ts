export interface LocationResponse {
  data: [
    {
      id: number;
      wikiDataId: string;
      type: string;
      city: string;
      name: string;
      country: string;
      countryCode: string;
      region: string;
      regionCode: string;
      regionWdId: string;
      latitude: number;
      longitude: number;
      population: number;
    }
  ],
  metadata: {
    currentOffset: number;
    totalCount: number;
  }
}

export interface Location {
  value: string;
  label: string;
}

export interface Trip {
  lat: string;
  lon: string;
  startDate: string;
  endDate: string;
}

// export Weather {
//   "latitude" : number;
//   "longitude" : number;
//   "resolvedAddress" : string;
//   "address" : string;
//   "timezone" : string;
//   "tzoffset" : number;
//   "description": string;
//   "days" : [{ //array of days of weather data objects
//     "datetime": "2020-11-12",
//     "datetimeEpoch": 1605157200,
//     "temp": 59.6,
//     "feelslike": 59.6,
//     ...
//     "stations" : {
//   },
//     "source" : "obs",
//     "hours" : [{  //array of hours of weather data objects
//       "datetime": "01:00:00",
//       ...
//          }, ...]
//      },...],
// "alerts" : [{
//   "event": "Flash Flood Watch",
//   "description": "...",
//   ...
//          }
// ],
//   "currentConditions" : {
//   "datetime" : "2020-11-11T22:48:35",
//     "datetimeEpoch" : 160515291500,
//       "temp" : 67.9,
//          ...
// }
// }