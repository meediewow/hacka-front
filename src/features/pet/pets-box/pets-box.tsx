import Stack from '@mui/material/Stack';
import { PetsBoxProps } from './types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getPetTypeMapLabel } from '@/entities/pet/utils/pet-type';
import Paper from '@mui/material/Paper';
import { usePetFormModal } from '@/entities/pet/modals/pet-form/use-pet-form-modal';

export const PetsBox = ({ value, onAdd, isAddedDisabled }: PetsBoxProps) => {
    const openModal = usePetFormModal();

    const onAddPet = async () => {
        const pet = await openModal();

        if (pet) {
            onAdd?.(pet);
        }
    };

    return (
        <Paper sx={{ p: 1 }}>
            <Stack gap={0.5}>
                <Typography variant="body2">Питомцы</Typography>

                <Stack gap={0.5}>
                    {value.map((pet) => (
                        <Typography key={pet.name} variant="caption">
                            {pet.name} ({getPetTypeMapLabel(pet.category.id)})
                        </Typography>
                    ))}
                </Stack>

                {!isAddedDisabled && onAdd && (
                    <Button
                        onClick={() => onAddPet()}
                        sx={{
                            width: 290,
                        }}
                        size="small"
                        variant="contained"
                    >
                        Добавить питомца
                    </Button>
                )}
            </Stack>
        </Paper>
    );
};
