import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages';

const home = lazy(() => import(Home).then((res) => ({ default: res.Home })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route element={<home />} path="/" />
      </Routes>
    </Suspense>
  );
};
