import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

export const TabMenu = () => {
  const [activeProjectsMenu, setActiveProjectsMenu] = useState(0);
  return (
    <div className="bg-black h-fit w-full absolute text-white">
      <Box sx={{ borderBottom: 1, borderColor: 'grey' }}>
        <Tabs aria-label="nav bar">
          <Tab
            className="text-white font-title text-2xl pl-8"
            label="Home"
            onClick={() => window.location.assign('/')}
          />
          <Tab
            className="text-white font-title text-2xl pl-8"
            label="Projects"
            onClick={() => window.location.assign('projects')}
          />
          <Tab
            className="text-white font-title text-2xl pl-8"
            label="About"
            onClick={() => window.location.assign('about')}
          />
          <Tab
            className="text-white font-title text-2xl pl-8"
            label="Contact Me"
            onClick={() => window.location.assign('contact')}
          />
        </Tabs>
      </Box>
    </div>
  );
};
