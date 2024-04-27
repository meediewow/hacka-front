import { createTheme } from '@mui/material/styles';
import { components } from '@/shared/themes/components';
import type {} from '@mui/lab/themeAugmentation';

export const theme = createTheme({
    components,
    spacing: 16,
});
