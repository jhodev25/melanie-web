import { Box, Tabs, Tab, Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

export const TabMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [activeProjectsMenu, setActiveProjectsMenu] = useState(0);

  const handleClick = (event: any) => {
    setAnchorEl(event);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTabChange = (event: any, newValue: any) => {
    setAnchorEl(null);
    setActiveProjectsMenu(newValue);
  };
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-black w-full fixed z-10 p-4 text-white">
      <Box sx={{ borderBottom: 1, borderColor: 'grey' }}>
        <Tabs aria-label="nav bar">
          <Tab
            className="text-white font-title text-2xl pl-8"
            label="Home"
            onClick={() => window.location.assign('/')}
          />
          <Button
            id="projects-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Project Test
          </Button>
          <Menu
            id="projects-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'projects-button' }}
          >
            <MenuItem>Marketing</MenuItem>
          </Menu>
          {/* <Tab
            className="text-white font-title text-2xl pl-8"
            label="Projects Test"
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          /> */}
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
