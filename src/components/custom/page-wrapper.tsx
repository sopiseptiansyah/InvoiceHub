import { Container, Typography } from '@mui/material';
import React from 'react';

interface PageWrapperProps {
  title?: string;
  children?: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <Container>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: 26,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default PageWrapper;
