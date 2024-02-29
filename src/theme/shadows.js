import { alpha } from '@mui/material/styles';
import palette from './palette';

const LIGHT_MODE = palette.light.grey[500];

const createCustomShadow = (color) => {
  return {
    primary: `0 8px 16px 0 ${alpha(palette.light.primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette.light.info.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette.light.secondary.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(palette.light.success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette.light.warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette.light.error.main, 0.24)}`,
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
  };
};

export const customShadows = {
  light: createCustomShadow(LIGHT_MODE),
};

export default customShadows;
