import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { persistor, store } from '../redux/store/store';
import { RootRouter } from '../router/RootRouter';

import { defaultTheme } from './common/theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

