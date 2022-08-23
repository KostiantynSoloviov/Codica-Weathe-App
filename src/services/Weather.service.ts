import axios from 'axios';

import { Coordinates, City } from '../types/City';
import { Forecast, ForecastWeatherResponse } from '../types/Weather';
import { TemperatureService } from './Temperature.service';

const BASE_ULR = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '09d6ce59b1cf6ecc89149d48342d2798';

export class WeatherService {
  static async getForecast({ lat, lon }: Coordinates): Promise<Forecast[]> {
    const {
      data: { list },
    } = await axios.get(`${BASE_ULR}/forecast`, {
      params: {
        lat,
        lon,
        appId: API_KEY,
      },
    });

    // take first 20 elements
    const cutList = list.filter(
      (_weather: ForecastWeatherResponse, index: number) => index <= 20
    );

    const forecastList: Forecast[] = cutList.map(
      (weather: ForecastWeatherResponse) => {
        const { temp_max, temp_min, temp } = weather.main;

        const min = TemperatureService.getInCelsius(temp_min);
        const current = TemperatureService.getInCelsius(temp);
        const max = TemperatureService.getInCelsius(temp_max);

        return { temperature: { min, current, max }, date: weather.dt_txt };
      }
    );

    return forecastList;
  }

  static async getCurrent({ lat, lon }: Coordinates): Promise<City> {
    const { data } = await axios.get(`${BASE_ULR}/weather`, {
      params: {
        lat,
        lon,
        appId: API_KEY,
      },
    });

    const { name, main, weather, coord: coordinates } = data;

    const { main: status, description, icon } = weather[0];
    const temperature = TemperatureService.getInCelsius(main.temp);

    return {
      name,
      coordinates,
      weather: { status, temperature, description, icon },
    };
  }
}

