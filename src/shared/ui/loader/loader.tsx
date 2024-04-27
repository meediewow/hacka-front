import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export const Loader: React.FC = () => {
    return (
        <Stack height="100%" alignItems="center" justifyContent="center">
            <CircularProgress />
        </Stack>
    );
};
