export interface IWeather {
  cod: number,
  coord: {  //ICoordCity
    lat: number,
    lon: number,
  },
  main: {  //IMainWeatherIndicator
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  sys: {  //ISysCityInfo
    country: string,
    sunrise: number,
    sunset: number,
  },
  timezone: number,
  visibility: number,
  weather: [  //ICloudinessWeatherIndicator
    {
      description: string,
      icon: string,
      id: number,
      main: string,
    },
  ],
  wind: {  //IWindWeatherIndicator
    deg: number,
    gust: number,
    speed: number,
  },
}

