'use client';

import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { LocalizationProvider } from '@mui/x-date-pickers';
import theme, { poppins } from './theme';

/**
 * ThemeProvider component that wraps the app with necessary providers.
 * @param {ReactNode} children - The children components that will be rendered within the provider.
 * @returns A theme and localization wrapper around the child components.
 */
function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    //  Provides caching for Next.js router
    <AppRouterCacheProvider>
      {/* Applies the custom theme to the app */}
      <MuiThemeProvider theme={theme}>
        {/* Provides localization for date pickers */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {/* Resets the CSS for consistent styling */}
          <CssBaseline />
          <Box
            component={'body'}
            bgcolor={'white'}
            className={`${poppins.variable}`}
          >
            {children}
          </Box>
        </LocalizationProvider>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default ThemeProvider;
