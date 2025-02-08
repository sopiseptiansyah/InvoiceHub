import { PageCard } from '@/components/custom/page-card';
import PageWrapper from '@/components/custom/page-wrapper';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { Metadata } from 'next';
import React from 'react';

const pageTitle = 'Add Invoice';

export const metadata: Metadata = {
  title: pageTitle,
};

const AddInvoice = () => {
  return (
    <PageWrapper title={pageTitle}>
      <PageCard label="Invoice Form"></PageCard>
    </PageWrapper>
  );
};

export default AddInvoice;
