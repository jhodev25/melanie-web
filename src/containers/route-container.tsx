import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages').then((res) => ({ default: res.Home })));
const SocialMediaManagement = lazy(() => import('pages').then((res) => ({ default: res.SocialMediaManagement })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SocialMediaManagement />} path="/socialmediamanagement" />
      </Routes>
    </Suspense>
  );
};
