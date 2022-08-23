import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const OFFSET = 3;
const SEARCH_HEIGHT = 4;
const HEADER_HEIGHT = 10;

export const useStyles = makeStyles((theme: Theme) => ({
  autocomplete: {
    position: 'sticky',
    height: theme.spacing(SEARCH_HEIGHT),
    top: theme.spacing(HEADER_HEIGHT + OFFSET),
    zIndex: 1,
  },
}));
