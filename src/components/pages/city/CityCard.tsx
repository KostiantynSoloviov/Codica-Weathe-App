import { FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';

import { AppDispatch } from '../../../redux/store/store';
import { deleteCity, setCityAsync } from '../../../redux/slice/cities.slice';
import { City } from '../../../types/City';
import { TemperatureService } from '../../../services/Temperature.service';

interface CityCardProps {
  city: City;
}

const getIconUrl = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@4x.png`;
};

export const CityCard: FC<CityCardProps> = ({
  city: {
    name,
    weather: { status, temperature, description, icon },
    coordinates,
  },
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`${process.env.PUBLIC_URL}/${name}`);
  };

  const handleUpdate = () => {
    dispatch(setCityAsync(coordinates));
  };

  const handleDelete = () => {
    dispatch(deleteCity(name));
  };

  const temperatureLabel = useMemo(
    () => TemperatureService.getLabel(temperature),
    [temperature]
  );

  return (
    <Card sx={{ margin: 4, width: '250px', bgcolor: 'grey.300' }}>
      <CardActionArea
        sx={{
          width: '100%',
        }}
        onClick={onCardClick}
      >
        <CardMedia component="img" src={getIconUrl(icon)} alt="flat image" />
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems="center"
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography mb={1} variant="h4">{`${name}`}</Typography>
            <Typography mb={1} variant="h4">
              {temperatureLabel}
            </Typography>
            <Typography mb={1} variant="body1" color="text.secondary">
              {`${status},${description}`}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      <CardActions sx={{ flexGrow: 1 }}>
        <Button fullWidth color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button fullWidth color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

