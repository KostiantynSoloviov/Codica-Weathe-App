/* eslint-disable react/display-name */
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material';

import { defaultTheme } from 'src/components/common/theme';
import { store } from 'src/redux/store/store';

export const provider = (ui: ReactElement): ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>
    </Provider>
  );
};

