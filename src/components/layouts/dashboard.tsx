import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';

import type { BoxProps } from '@mui/material';

interface ThemeLayoutProps {
  Sider?: React.FC;
  Header?: React.FC;
  children?: ReactNode;
  childrenBoxProps?: BoxProps;
  containerBoxProps?: BoxProps;
}

export const Dashboard: React.FC<ThemeLayoutProps> = ({ Sider, Header, children }) => {
  const SiderToRender = Sider;
  const HeaderToRender = Header;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {SiderToRender && <SiderToRender />}
        <Box
          sx={[
            {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minWidth: '1px',
              minHeight: '1px',
              height: '100vh',
              overflowY: 'visible',
              overflowX: 'hidden',
            },
          ]}
        >
          {HeaderToRender && <HeaderToRender />}
          <Box
            component="main"
            sx={{
              p: { xs: 1, md: 2, lg: 5 },
              flexGrow: 1,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
