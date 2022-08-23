import React from 'react';

import { AppBar, Box, Typography } from '@mui/material';

import { HEADER_HEIGHT, useStyles } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar sx={{ bgcolor: 'grey.900' }} className={classes.appBar}>
        <Typography
          sx={{ marginLeft: '5%' }}
          className={classes.typography}
          variant="h3"
          noWrap
          component="div"
        >
          weather app
        </Typography>
      </AppBar>
      <Box className={classes.content} mt={HEADER_HEIGHT}>
        {children}
      </Box>
    </>
  );
};

