import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MenuButton } from 'components/lib/menu';

const Home = lazy(() => import('pages').then((res) => ({ default: res.Home })));
const SocialMediaManagement = lazy(() => import('pages').then((res) => ({ default: res.SocialMediaManagement })));
const Projects = lazy(() => import('pages').then((res) => ({ default: res.Projects })));
const Contact = lazy(() => import('pages').then((res) => ({ default: res.Contact })));
const EventCoordination = lazy(() => import('pages').then((res) => ({ default: res.EventCoordination })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <MenuButton />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SocialMediaManagement />} path="/socialmediamanagement" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<EventCoordination />} path="/eventcoordination" />
      </Routes>
    </Suspense>
  );
};
