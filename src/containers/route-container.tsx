import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages').then((res) => ({ default: res.Home })));
const SocialMediaManagement = lazy(() => import('pages').then((res) => ({ default: res.SocialMediaManagement })));
const Projects = lazy(() => import('pages').then((res) => ({ default: res.Projects })));
const Contact = lazy(() => import('pages').then((res) => ({ default: res.Contact })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SocialMediaManagement />} path="/socialmediamanagement" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Suspense>
  );
};
