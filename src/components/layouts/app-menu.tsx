import { PostAdd, Toc } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import Link from 'next/link';
import React from 'react'

const AppMenu = () => {
  return (
    <List
      disablePadding
      sx={{
        flexGrow: 1,
        paddingTop: "16px",
      }}
      subheader={
        <ListSubheader component="div">
          MENU
        </ListSubheader>
      }
    >
        <Link href='/invoices/add'>
            <ListItemButton>
            <ListItemIcon
                sx={{
                    justifyContent: "center",
                    minWidth: "24px",
                    transition: "margin-right 0.3s",
                    marginRight: "12px",
                    color: "currentColor",
                    fontSize: "14px",
                }}
            >
                <PostAdd />
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={'Add Invoice'}
                sx={{
                    color: '#f4f4f4'
                }}
            />
            </ListItemButton>
        </Link>
        <Link href='/invoices/list'>
            <ListItemButton>
                <ListItemIcon
                    sx={{
                        justifyContent: "center",
                        minWidth: "24px",
                        transition: "margin-right 0.3s",
                        marginRight: "12px",
                        color: "#9D9D9D",
                        fontSize: "14px",
                    }}
                >
                    <Toc />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={'My Invoices'}
                    sx={{
                        color: '#9D9D9D'
                    }}
                />
            </ListItemButton>
        </Link>
    </List>
  )
}

export default AppMenu
