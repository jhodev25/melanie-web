import { Box, Tabs, Tab } from '@mui/material';

export const TabMenu = () => {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Home" onClick={() => window.location.assign('/')} />
          <Tab label="Projects" onClick={() => window.location.assign('projects')} />
          <Tab label="About" onClick={() => window.location.assign('about')} />
          <Tab label="Contact Me" onClick={() => window.location.assign('contact')} />
        </Tabs>
      </Box>
    </div>
  );
};
