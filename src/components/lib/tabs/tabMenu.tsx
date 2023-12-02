import { Box, Tabs, Tab } from '@mui/material';

export const TabMenu = () => {
  return (
    <div className="bg-black text-white">
      <Box sx={{ borderBottom: 1, borderColor: 'grey' }}>
        <Tabs aria-label="nav bar">
          <Tab className="text-white" label="Home" onClick={() => window.location.assign('/')} />
          <Tab className="text-white" label="Projects" onClick={() => window.location.assign('projects')} />
          <Tab className="text-white" label="About" onClick={() => window.location.assign('about')} />
          <Tab className="text-white" label="Contact Me" onClick={() => window.location.assign('contact')} />
        </Tabs>
      </Box>
    </div>
  );
};
