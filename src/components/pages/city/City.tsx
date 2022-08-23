import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Card, CardContent, Typography } from '@mui/material';

import { TemperatureService } from 'src/services/Temperature.service';
import { AppDispatch } from 'src/redux/store/store';
import { citySelector } from 'src/redux/selector/cities.selector';
import { forecastListSelector } from 'src/redux/selector/forecast.selector';
import {
  clearForecast,
  getForecastAsync,
} from 'src/redux/slice/forecast.slice';

import { ForecastContainer } from '../forecast/ForecastContainer';

export const City = () => {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const city = useSelector(citySelector(params.cityName));
  const forecastList = useSelector(forecastListSelector);

  useEffect(() => {
    if (city) {
      dispatch(getForecastAsync(city.coordinates));
    }
    return () => {
      dispatch(clearForecast());
    };
  }, []);

  const temperatureLabel = useMemo(() => {
    if (city?.weather.temperature)
      return TemperatureService.getLabel(city.weather.temperature);
    return '';
  }, [city?.weather.temperature]);

  return (
    <>
      <Card
        sx={{
          marginTop: 15,
          width: '350px',
          bgcolor: 'grey.300',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h1">{city?.name}</Typography>
          <Typography variant="h5">Current temperature:</Typography>
          <Typography variant="h4">{temperatureLabel}</Typography>
          <Typography variant="h5" color="GrayText">
            {`${city?.weather.status}, ${city?.weather.description}`}
          </Typography>
        </CardContent>
      </Card>
      <ForecastContainer list={forecastList} />
    </>
  );
};

