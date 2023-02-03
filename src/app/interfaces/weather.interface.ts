import {ICoordCity} from "./coordCity.interface";
import {IMainWeatherIndicator} from "./mainWeatherIndicator.interface";
import {ISysCityInfo} from "./sysCityInfo.interface";
import {ICloudinessWeatherIndicator} from "./cloudinessWeatherIndicator.interface";
import {IWindWeatherIndicator} from "./windWeatherIndicator.interface";

export interface IWeather {
  image?: string;
  cod: number,
  coord: ICoordCity,
  main: IMainWeatherIndicator,
  name: string,
  sys: ISysCityInfo,
  timezone: number,
  visibility: number,
  weather: ICloudinessWeatherIndicator[],
  wind: IWindWeatherIndicator,
}

