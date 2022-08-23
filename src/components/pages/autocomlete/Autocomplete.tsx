import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Autocomplete, TextField } from '@mui/material';

import { optionsSelector } from '../../../redux/selector/cities.selector';
import { CityOption } from '../../../types/City';
import {
  clearOptions,
  getOptionsAsync,
  setCityAsync,
} from '../../../redux/slice/cities.slice';
import { AppDispatch } from '../../../redux/store/store';

import { useStyles } from './Autocomplete.style';

interface CitySearchProps {
  toggleIsFocused: () => void;
}

export const CityAutocomplete: React.FC<CitySearchProps> = ({
  toggleIsFocused,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const [cityName, setCityName] = useState<string>('');
  const autocompleteRef = useRef();

  const options = useSelector(optionsSelector);

  useEffect(() => {
    dispatch(clearOptions());
  }, []);

  const onCityChange = (name: string) => {
    if (name.trim()) {
      dispatch(getOptionsAsync(name));
      setCityName(name);
    } else {
      dispatch(clearOptions());
    }
  };

  const handleSelect = (cityOption: CityOption) => {
    dispatch(setCityAsync(cityOption.value));
    setCityName(' ');
  };

  return (
    <Autocomplete
      sx={{ width: '300px' }}
      fullWidth
      freeSolo
      disableClearable
      blurOnSelect
      className={classes.autocomplete}
      ref={autocompleteRef}
      options={cityName ? options : []}
      filterOptions={(optionList) => optionList}
      getOptionLabel={(option) => (option as CityOption).label.toString()}
      onChange={(event, value) => handleSelect(value as CityOption)}
      onFocus={toggleIsFocused}
      onBlur={toggleIsFocused}
      inputValue={cityName}
      renderOption={(props, { label, value: { lat, lon } }) => {
        return (
          <li {...props} key={`${label}${lat}${lon}`}>
            {label}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          label="Enter city"
          value={cityName}
          onChange={(event: { target: { value: string } }) =>
            onCityChange(event.target.value)
          }
        />
      )}
    />
  );
};

