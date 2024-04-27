import Stack from '@mui/material/Stack';
import { PetsBoxProps } from './types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PetType } from '@/entities/pet/enum';
import { getPetTypeMapLabel } from '@/entities/pet/utils/pet-type';
import Paper from '@mui/material/Paper';

export const PetsBox = ({ value, onChange, isAddedDisabled }: PetsBoxProps) => {
    return (
        <Paper sx={{ p: 0.5 }}>
            <Stack gap={0.5}>
                <Typography variant="body2">Питомцы</Typography>

                <Stack gap={0.5}>
                    {value.map((pet) => (
                        <Typography key={pet.name} variant="caption">
                            {pet.name} ({getPetTypeMapLabel(pet.category)})
                        </Typography>
                    ))}
                </Stack>

                {!isAddedDisabled && (
                    <Button
                        onClick={() =>
                            onChange([
                                ...value,
                                { name: 'New pet', category: PetType.Bird },
                            ])
                        }
                        sx={{
                            width: 290,
                        }}
                        variant="contained"
                    >
                        Добавить питомца
                    </Button>
                )}
            </Stack>
        </Paper>
    );
};
