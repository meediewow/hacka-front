import { PetType } from '../enum';

const PetTypeMap = {
    [PetType.Dog]: 'Собака',
    [PetType.SmallDog]: 'Маленькая собачка',
    [PetType.Cat]: 'Кошка',
    [PetType.SmallPet]: 'Маленький питомец',
    [PetType.Exotic]: 'Экзотический питомец',
    [PetType.Bird]: 'Попугаи и пр птицы',
};

export const getPetTypeMapLabel = (type: PetType | null | undefined) => {
    return type ? PetTypeMap[type] : '';
};

export const getPetTypeMapOptions = () => {
    return Object.entries(PetTypeMap).map(([id, name]) => ({
        name,
        id: Number(id),
    }));
};
