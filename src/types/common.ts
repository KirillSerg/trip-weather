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

export interface City {
  value: string;
  label: string;
}

export interface Trip {
  id: string;
  name: string;
  lat: string;
  lon: string;
  startDate: string;
  endDate: string;
  img: string
}

// {
//   "queryCost": 1,
//     "latitude": 42.5,
//       "longitude": 45.5,
//         "resolvedAddress": "42.5,45.5",
//           "address": "42.5,45.5",
//             "timezone": "Asia/Tbilisi",
//               "tzoffset": 4.0,
//                 "days": [
//                   {
//                     "datetime": "2024-02-22",
//                     "datetimeEpoch": 1708545600,
//                     "tempmax": 19.8,
//                     "tempmin": 4.9,
//                     "temp": 11.3,
//                     "feelslikemax": 11.3,
//                     "feelslikemin": -5.6,
//                     "feelslike": 1.9,
//                     "dew": 8.3,
//                     "humidity": 87.5,
//                     "precip": 0.024,
//                     "precipprob": 100.0,
//                     "precipcover": 25.0,
//                     "preciptype": [
//                       "snow"
//                     ],
//                     "snow": 0.0,
//                     "snowdepth": 16.8,
//                     "windgust": 8.3,
//                     "windspeed": 7.6,
//                     "winddir": 215.7,
//                     "pressure": 1026.6,
//                     "cloudcover": 93.6,
//                     "visibility": 2.3,
//                     "solarradiation": 149.6,
//                     "solarenergy": 12.9,
//                     "uvindex": 6.0,
//                     "severerisk": 10.0,
//                     "sunrise": "07:45:41",
//                     "sunriseEpoch": 1708573541,
//                     "sunset": "18:38:09",
//                     "sunsetEpoch": 1708612689,
//                     "moonphase": 0.42,
//                     "conditions": "Snow, Overcast",
//                     "description": "Cloudy skies throughout the day with snow in the morning and afternoon.",
//                     "icon": "snow",
//                     "stations": [
//                       "remote"
//                     ],
//                     "source": "comb"
//                   }
//                 ]
// }