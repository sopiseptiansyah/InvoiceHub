'use client';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { menuItems } from '@/constants/routes';
import { usePathname } from 'next/navigation';

const AppMenu = () => {
  const pathname = usePathname();

  return (
    <List
      disablePadding
      sx={{
        flexGrow: 1,
        paddingTop: '16px',
      }}
      subheader={<ListSubheader component="div">MENU</ListSubheader>}
    >
      {menuItems.map((item) => {
        const MenuIcon = item.icon;
        return (
          <Link href={item.path} key={item.path}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  justifyContent: 'center',
                  minWidth: '24px',
                  transition: 'margin-right 0.3s',
                  marginRight: '12px',
                  color: pathname === item.path ? '#f4f4f4' : '#9D9D9D',
                  fontSize: '14px',
                }}
              >
                <MenuIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={item.title}
                sx={{
                  color: pathname === item.path ? '#f4f4f4' : '#9D9D9D',
                }}
              />
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default AppMenu;
