import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { WeatherService } from '../../services/Weather.service';
import { Coordinates } from '../../types/City';
import { Forecast } from '../../types/Weather';

export const getForecastAsync = createAsyncThunk(
  'forecast/get',
  async (coordinates: Coordinates) => {
    const forecastList = await WeatherService.getForecast(coordinates);
    return forecastList;
  }
);

interface ForecastState {
  forecastList: Forecast[];
}

const initialState: ForecastState = {
  forecastList: [],
};

export const forecast = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    clearForecast() {
      return { forecastList: [] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getForecastAsync.fulfilled, (state, action) => {
      const { payload: forecastList } = action;
      return { forecastList };
    });
  },
});

export const { clearForecast } = forecast.actions;
export default forecast.reducer;

