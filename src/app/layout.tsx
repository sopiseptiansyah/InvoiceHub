import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Dashboard } from '@/components/layouts/dashboard';
import AppSideBar from '@/components/layouts/sidebar';
import AppHeader from '@/components/layouts/header';
// or `v1X-appRouter` if you are using Next.js v1X

const opensans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Invoice Hub',
  description: 'Invoice management system - a sleek invoice management platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Dashboard Sider={() => <AppSideBar />} Header={() => <AppHeader />}>
              {children}
            </Dashboard>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
