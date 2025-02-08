import { Paper } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import imageLogo from '@/assets/app-logo.png'
import Link from 'next/link';

export const AppLogo = () => {
  return (
    <Paper 
        sx={{
            fontSize: "14px",
            width: "100%",
            height: 80,
            display: "flex",
            flexShrink: 0,
            alignItems: "center",
            // justifyContent: 'f',
            paddingLeft: '16px',
            paddingRight: '8px',
            paddingTop: '24px'
        }}
        style={{
            backgroundColor: 'transparent',
            boxShadow: 'unset',
        }}
    >
        <Link href="/">
            <Image
                src={imageLogo}
                alt="App logo"
                priority
                style={{
                    width: '70%',
                    maxWidth: '100%',
                    height: 'auto'
                }}
            />
        </Link>
    </Paper>
  )
}
