import { RootState } from '../store/store';
import { City } from '../../types/City';

type Return = (state: RootState) => City | undefined;

export const optionsSelector = (state: RootState) => state.cities.options;
export const citiesSelector = (state: RootState) =>
  Object.values(state.cities.cities);
export const citySelector =
  (name: string | undefined): Return =>
  (state: RootState) => {
    if (!name) return undefined;
    return state.cities.cities[name];
  };

