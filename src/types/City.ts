import { Weather } from './Weather';

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface CityOptionResponse {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface CityOption {
  label: string;
  value: Coordinates;
}

export interface City {
  name: string;
  weather: Weather;
  coordinates: Coordinates;
}

