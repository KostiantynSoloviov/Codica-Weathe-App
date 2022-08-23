export interface Weather {
  temperature: number;
  status: string;
  description: string;
  icon: string;
}

export interface ForecastWeatherResponse {
  dt_txt: string;
  main: {
    temp_min: number;
    temp: number;
    temp_max: number;
  };
}

export interface Forecast {
  temperature: {
    min: number;
    current: number;
    max: number;
  };
  date: string;
}

