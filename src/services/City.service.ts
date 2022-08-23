import axios from 'axios';

import { CityOption, CityOptionResponse, Coordinates } from '../types/City';

const BASE_ULR = 'https://api.openweathermap.org/geo/1.0/direct';
const API_KEY = '09d6ce59b1cf6ecc89149d48342d2798';
const CITIES_LIMIT = 5;

export class CityService {
  static async getOptions(cityName: string): Promise<CityOption[]> {
    const { data } = await axios.get(`${BASE_ULR}`, {
      params: {
        q: cityName,
        limit: CITIES_LIMIT,
        appId: API_KEY,
      },
    });

    return data.map(({ name, country, lat, lon }: CityOptionResponse) => ({
      label: `${name},${country}`,
      value: { lat, lon },
    }));
  }

  static async getCoordinatesByName(name: string): Promise<Coordinates> {
    const { data } = await axios.get(`${BASE_ULR}`, {
      params: {
        q: name,
        appId: API_KEY,
      },
    });
    const { lat, lon } = data[0];
    return { lat, lon };
  }
}

