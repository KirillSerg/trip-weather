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
  img: string;
}

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

export interface Weather {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string; //42.5;45.5
  address: string; // 42.5;45.5;
  timezone: string;
  tzoffset: number;
  days: [
    {
      datetime: string; // 2024-02-22;
      datetimeEpoch: number;  // 1708545600;
      tempmax: number;
      tempmin: number;
      temp: number;
      feelslikemax: number;
      feelslikemin: number;
      feelslike: number;
      dew: number;
      humidity: number;
      precip: number;
      precipprob: number;
      precipcover: number;
      preciptype: string[]; // snow
      snow: number;
      snowdepth: number;
      windgust: number;
      windspeed: number;
      winddir: number;
      pressure: number;
      cloudcover: number;
      visibility: number;
      solarradiation: number;
      solarenergy: number;
      uvindex: number;
      severerisk: number;
      sunrise: string; // 07:45:41;
      sunriseEpoch: number; // 1708573541;
      sunset: number; // 18:38:09;
      sunsetEpoch: number;  // 1708612689;
      moonphase: number; // 0.42;
      conditions: string; // Snow; Overcast;
      description: string;
      icon: string; //snow;
      stations: string[];
      source: string;
    }
  ]
}