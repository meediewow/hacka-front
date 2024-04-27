import { styled } from '@mui/material/styles';

import type { Color, Size } from './types';

const sizeMap: Record<Size, number> = { small: 4, medium: 6 };

export const AccessorySC = styled('span')<{ size: Size; color: Color }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => sizeMap[props.size]}px;
    height: ${(props) => sizeMap[props.size]}px;
    background-color: ${(props) => {
        switch (props.color) {
            case 'inherit':
                return 'currentColor';

            case 'primary':
            case 'secondary':
            case 'error':
            case 'info':
            case 'success':
            case 'warning':
                return props.theme.palette[props.color].main;

            default:
                return props.theme.palette.grey[300];
        }
    }};
    border-radius: 100%;
`;
