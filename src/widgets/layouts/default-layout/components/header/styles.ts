import { styled } from '@mui/material/styles';

export const HeaderSC = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing(0.5)};
    padding: ${(props) => props.theme.spacing(0.75, 1)};
    background-color: ${(props) => props.theme.palette.common.white};
`;
