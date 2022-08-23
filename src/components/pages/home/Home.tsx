import { useState } from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector } from 'src/redux/selector/cities.selector';

import { Box, Grid } from '@mui/material';

import { CityList } from '../city/CityList';
import { CityAutocomplete } from '../autocomlete/Autocomplete';

import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  const cities = useSelector(citiesSelector);
  const [isFocused, setIsFocused] = useState(false);

  const toggleIsFocused = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        sm={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CityAutocomplete toggleIsFocused={toggleIsFocused} />
        <Box className={classes.listContainer} sx={{ display: 'flex' }}>
          <CityList cities={cities} />
        </Box>
      </Grid>
    </Grid>
  );
};

