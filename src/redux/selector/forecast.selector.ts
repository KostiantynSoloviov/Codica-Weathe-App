import { RootState } from '../store/store';

export const forecastListSelector = (state: RootState) =>
  state.forecast.forecastList;

