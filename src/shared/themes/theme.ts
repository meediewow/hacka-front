import { createTheme } from '@mui/material/styles';
import { components } from '@/shared/themes/components';
import { palette } from '@/shared/themes/palette';
import type {} from '@mui/lab/themeAugmentation';

export const theme = createTheme({
    components,
    spacing: 16,
    palette,
    shape: {
        borderRadius: 8,
    },
});
