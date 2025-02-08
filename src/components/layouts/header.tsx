'use client';
import {
  AppBar,
  Avatar,
  Badge,
  BadgeProps,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import avatarImage from '@/assets/avatar.jpg';
import { Chat, ExpandMore, Logout, Notifications } from '@mui/icons-material';
import { useState } from 'react';
import React from 'react';
import { ThemeSwitch } from '../custom/theme-switch';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#DC3545',
    width: '8px',
    height: '8px',
    borderRadius: '999px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(255 255 255) 0px 0px 0px 3px',
    top: '4px',
    right: '4px',
  },
}));

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Chat">
        <StyledBadge variant="dot" invisible>
          <IconButton
            aria-label="cart"
            onClick={handleClick}
            sx={{
              backgroundColor: '#EFF4FB',
              border: '1px solid #E2E8F0',
              width: '34px',
              height: '34px',
            }}
          >
            <Notifications sx={{ color: '#64748B', fontSize: 18 }} />
          </IconButton>
        </StyledBadge>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              padding: 0,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            padding: 0,
            paddingTop: 0,
          }}
        >
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Invoice Has Been Added"
                secondary="Your invoice has been saved succesfully."
              />
            </ListItem>
          </ListItemButton>
          <Divider component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Invoice Has Been Added"
                secondary="Your invoice has been saved succesfully."
              />
            </ListItem>
          </ListItemButton>
          <Divider component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Invoice Has Been Added"
                secondary="Your invoice has been saved succesfully."
              />
            </ListItem>
          </ListItemButton>
        </List>
      </Menu>
    </>
  );
};

const ChatDrodpown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Chat">
        <StyledBadge variant="dot">
          <IconButton
            aria-label="cart"
            onClick={handleClick}
            sx={{
              backgroundColor: '#EFF4FB',
              border: '1px solid #E2E8F0',
              width: '34px',
              height: '34px',
            }}
          >
            <Chat sx={{ color: '#64748B', fontSize: 18 }} />
          </IconButton>
        </StyledBadge>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              padding: 0,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            padding: 0,
            paddingTop: 0,
          }}
        >
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
          <Divider component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
          <Divider component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
        </List>
      </Menu>
    </>
  );
};

const DropdownProfile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap="0">
        <Paper sx={{ boxShadow: 'unset', textAlign: 'right' }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, fontSize: 14, lineHeight: '15px' }}
          >
            John Doe
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#637381', fontWeight: 600, fontSize: 12 }}>
            Verified Member
          </Typography>
        </Paper>
        <Tooltip title="Account settings">
          <Button
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Stack direction="row" gap="2px" alignItems="center">
              <Avatar
                src={avatarImage.src}
                sx={{
                  width: 46,
                  height: 46,
                  boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
                }}
              />
              <ExpandMore />
            </Stack>
          </Button>
        </Tooltip>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

const AppHeader: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: '80px',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        {/* <HamburgerMenu /> */}
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          gap="16px"
        >
          <ThemeSwitch />
          <NotificationDropdown />
          <ChatDrodpown />
          <DropdownProfile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
