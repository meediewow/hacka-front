import React from 'react';

import { mapPetToPetFormData } from '@/entities/pet/mappers/pet-pet-form';
import { Pet } from '@/entities/pet/types';
import { enqueueSnackbar } from 'notistack';
import { PetFormData } from '@/entities/pet/forms/pet-form';
import { PetsBox } from '../pets-box/pets-box';
import { useAddPetMutation } from '@/entities/pet/api/add-pet.mutation';

type Props = {
    initialPets: Pet[];
};

export const PetEditedBox: React.FC<Props> = ({ initialPets }) => {
    const addPetMutation = useAddPetMutation();

    const [pets, setPets] = React.useState(
        React.useMemo(() => initialPets?.map(mapPetToPetFormData) ?? [], [initialPets])
    );

    const handleAddPet = React.useCallback(
        async (newPet: PetFormData) => {
            try {
                const pets = await addPetMutation.mutateAsync({
                    pets: [
                        {
                            name: newPet.name,
                            type: newPet.category.id,
                            age: newPet.age as number,
                            comment: newPet.comment as string,
                        },
                    ],
                });

                setPets(
                    pets
                        ?.map((pet) => ({
                            ...pet,
                            category: pet.type,
                        }))
                        .map(mapPetToPetFormData)
                );
            } catch (error) {
                enqueueSnackbar((error as { message: string }).message, {
                    variant: 'error',
                });
            }
        },
        [addPetMutation]
    );

    return <PetsBox value={pets} onAdd={handleAddPet} />;
};
