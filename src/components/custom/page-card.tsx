import { Card, CardContent, CardHeader } from '@mui/material';
import React, { ReactNode } from 'react';

interface PageCardProps {
  label: string;
  children?: ReactNode;
}

export const PageCard = ({ label, children }: PageCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={label}
        sx={{
          borderBottom: '1px solid #E2E8F0',
          '& .MuiCardHeader-title': {
            fontSize: 16,
            fontWeight: 600,
          },
        }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
