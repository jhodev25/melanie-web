import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { TabMenu } from 'components';

const Home = lazy(() => import('pages').then((res) => ({ default: res.Home })));
const SocialMediaManagement = lazy(() => import('pages').then((res) => ({ default: res.SocialMediaManagement })));
const Projects = lazy(() => import('pages').then((res) => ({ default: res.Projects })));
const Contact = lazy(() => import('pages').then((res) => ({ default: res.Contact })));
const EventCoordination = lazy(() => import('pages').then((res) => ({ default: res.EventCoordination })));
const PartnershipMarketing = lazy(() => import('pages').then((res) => ({ default: res.PartnershipMarketing })));
const InfluencerMarketing = lazy(() => import('pages').then((res) => ({ default: res.InfluencerMarketing })));
const MarketingMerchandising = lazy(() => import('pages').then((res) => ({ default: res.MarketingMerchandising })));
const About = lazy(() => import('pages').then((res) => ({ default: res.About })));

export const RouteContainer = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <TabMenu />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SocialMediaManagement />} path="/socialmediamanagement" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<EventCoordination />} path="/eventcoordination" />
        <Route element={<PartnershipMarketing />} path="/partnershipmarketing" />
        <Route element={<InfluencerMarketing />} path="/influencermarketing" />
        <Route element={<MarketingMerchandising />} path="/marketingmerchandisinginternship" />
        <Route element={<About />} path="/about" />
      </Routes>
    </Suspense>
  );
};
