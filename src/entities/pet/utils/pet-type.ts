import { PetType } from '../enum';

const PetTypeMap = {
    [PetType.Dog]: 'Собака',
    [PetType.SmallDog]: 'Маленькая собачка',
    [PetType.Cat]: 'Кошка',
    [PetType.SmallPet]: 'Маленький питомец (хомяк, кролик)',
    [PetType.Exotic]: 'Экзотический питомец (ящерица, паук)',
    [PetType.Bird]: 'Попугаи и пр птицы',
};

export const getPetTypeMapLabel = (type: PetType | null | undefined) => {
    return type ? PetTypeMap[type] : '';
};

export const PetTypeMapOptions = () => {
    return Object.entries(PetTypeMap).map(([id, name]) => ({
        name,
        id: Number(id),
    }));
};
