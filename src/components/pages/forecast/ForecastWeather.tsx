import React, { useMemo } from 'react';

import { Box, Typography } from '@mui/material';

import { Forecast } from '../../../types/Weather';
import { TemperatureService } from '../../../services/Temperature.service';

interface ForecastProps {
  forecast: Forecast;
}
export const ForecastWeather: React.FC<ForecastProps> = ({
  forecast: {
    temperature: { current },
    date,
  },
}) => {
  const temperatureLabel = useMemo(
    () => TemperatureService.getLabel(current),
    [current]
  );

  return (
    <Box position="relative">
      <Box>
        <Typography position="absolute" bottom="0" textAlign="center">
          {date}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={current}
          p={0.5}
          sx={{
            color: 'white',
            bgcolor: 'grey.900',
            cursor: 'pointer',
            borderRadius: '0 10px',
          }}
        >
          <Typography>{temperatureLabel}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

