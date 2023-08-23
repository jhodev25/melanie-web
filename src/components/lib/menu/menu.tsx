import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

import type { FC } from 'react';

export const Menu: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['About', 'Projects', 'Contact Me'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton edge="start" aria-label="open drawer" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
    // <div>
    //   <IconButton
    //     edge="start"
    //     aria-label="open drawer"
    //     onClick={toggleDrawer(true)}
    //     // sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
    //   >
    //     <MenuIcon />
    //   </IconButton>
    //   <Drawer variant="temporary" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
    //     <Box
    //       component="div"
    //       sx={{
    //         display: {
    //           xs: 'none',
    //           sm: 'none',
    //         },
    //       }}
    //     />
    //   </Drawer>
    // </div>
  );
};
