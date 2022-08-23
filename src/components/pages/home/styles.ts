import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const OFFSET = 3;
const SEARCH_HEIGHT = 4;

export const useStyles = makeStyles((theme: Theme) => ({
  listContainer: {
    marginTop: theme.spacing(SEARCH_HEIGHT + OFFSET + 2),
  },
}));

