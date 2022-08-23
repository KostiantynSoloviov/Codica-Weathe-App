import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityService } from '../../services/City.service';
import { WeatherService } from '../../services/Weather.service';
import { City, CityOption, Coordinates } from '../../types/City';

export const getOptionsAsync = createAsyncThunk(
  'city/get-options',
  async (name: string) => {
    const options = CityService.getOptions(name);
    return options;
  }
);

export const setCityAsync = createAsyncThunk(
  'city/update-current-weather',
  async (coordinates: Coordinates) => {
    const currentWeather = await WeatherService.getCurrent(coordinates);
    return currentWeather;
  }
);

interface CitiesState {
  options: CityOption[];
  cities: {
    [name: string]: City;
  };
}

const initialState: CitiesState = {
  options: [],
  cities: {},
};

export const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    deleteCity: (state, action: PayloadAction<string>) => {
      delete state.cities[action.payload];
    },
    clearOptions: (state) => {
      state.options = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOptionsAsync.fulfilled, (state, action) => {
      return {
        ...state,
        options: action.payload,
      };
    });

    builder.addCase(setCityAsync.fulfilled, (state, action) => {
      const cityName = action.payload.name;
      return {
        ...state,
        cities: { ...state.cities, [cityName]: action.payload },
      };
    });
  },
});

export const { deleteCity, clearOptions } = cities.actions;
export default cities.reducer;

