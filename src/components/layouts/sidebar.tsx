import { Box, Drawer } from '@mui/material';
import React from 'react';
import { AppLogo } from '../custom/app-logo';
import AppMenu from '../custom/app-menu';

const AppSideBar: React.FC = () => {
  const drawerWidth = () => {
    // if (siderCollapsed) return 56;
    return 280;
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: drawerWidth() },
          display: {
            xs: 'none',
            md: 'block',
          },
          transition: 'width 0.3s ease',
        }}
      />
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          zIndex: 1101,
          width: { sm: drawerWidth() },
          display: 'flex',
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth(),
            },
          }}
          open
        >
          <AppLogo />
          <AppMenu />
        </Drawer>
      </Box>
    </>
  );
};

export default AppSideBar;
