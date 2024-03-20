import { useTheme } from '@mui/material';

export const useLightMode = () => {
  const { palette } = useTheme();
  const isLight = palette.mode === 'light' ? true : false;

  return isLight;
};
