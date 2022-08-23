import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { City } from '../components/pages/city/City';
import { Home } from '../components/pages/home/Home';
import { Layout } from '../components/layout/Layout';

export const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/:cityName`}
            element={<City />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

