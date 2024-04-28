import Stack from '@mui/material/Stack';
import { PetsBoxProps } from './types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getPetTypeMapLabel } from '@/entities/pet/utils/pet-type';
import { usePetFormModal } from '@/entities/pet/modals/pet-form/use-pet-form-modal';
import { ContentCard } from '@/shared/ui/content-card';

export const PetsBox = ({ value, onAdd, sx }: PetsBoxProps) => {
    const openModal = usePetFormModal();

    const onAddPet = async () => {
        const pet = await openModal();

        if (pet) {
            onAdd?.(pet);
        }
    };

    return (
        <ContentCard title="Питомцы" sx={sx}>
            <Stack gap={0.5}>
                <Stack gap={0.5}>
                    {value.map((pet) => (
                        <>
                            <Typography variant="body1">
                                <b>{pet.name}</b> ({getPetTypeMapLabel(pet.category.id)},
                                возраст: {pet.age})
                            </Typography>

                            <Typography variant="caption">{pet.comment}</Typography>
                        </>
                    ))}
                </Stack>

                {onAdd && (
                    <Button onClick={() => onAddPet()} size="small" variant="contained">
                        Добавить питомца
                    </Button>
                )}
            </Stack>
        </ContentCard>
    );
};
