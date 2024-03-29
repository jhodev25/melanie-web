import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const options = ['Home', 'Projects', 'About', 'Contact Me'];

const ITEM_HEIGHT = 48;

export const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option: any) => {
    if (option === 'Home') {
      window.location.assign('/');
    } else if (option === 'Contact Me') {
      window.location.assign('/contact');
    } else window.location.assign(`/${option}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
