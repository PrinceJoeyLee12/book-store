import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { customShadows } from './shadows';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import palette from './palette';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: palette.light,
      breakpoints,
      customShadows: customShadows.light,
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
