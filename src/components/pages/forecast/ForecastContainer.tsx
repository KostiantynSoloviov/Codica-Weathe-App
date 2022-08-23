import React from 'react';

import { Box, Typography } from '@mui/material';

import { Forecast } from 'src/types/Weather';
import { ForecastWeather } from './ForecastWeather';

interface ForecastProps {
  list: Forecast[];
}
export const ForecastContainer: React.FC<ForecastProps> = ({ list }) => {
  return (
    <Box width="100%" border="">
      <Typography variant="h5" color="GrayText" textAlign="center">
        <h2>Forecast:</h2>
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        width="100%"
        marginTop="50px"
        p={2}
      >
        {list.map((forecast) => (
          <ForecastWeather key={forecast.date} forecast={forecast} />
        ))}
      </Box>
    </Box>
  );
};

