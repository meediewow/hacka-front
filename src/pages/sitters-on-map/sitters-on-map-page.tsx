import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PetType } from '@/entities/pet/enum.ts';
import { UserApiModel } from '@/entities/user/types.ts';
import { SittersMap } from '@/features/sitter/sitters-map';
import { getSitters } from '@/entities/sitter/api/get-sitters.ts';

const allPetTypes: PetType[] = [
    PetType.SmallPet,
    PetType.SmallDog,
    PetType.Dog,
    PetType.Cat,
    PetType.Bird,
    PetType.Exotic
];

export const SittersOnMapPage = () => {
    const navigate = useNavigate();
    const [sitters, setSitters] = useState<UserApiModel[]>([]);
    const [loading, setLoading] = useState(false);

    const loadSitters = React.useCallback(async () => {
        try {
            setLoading(true);
            const result = await getSitters({ category: allPetTypes });
            setSitters(result.list);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void loadSitters();
    }, [loadSitters]);

    const onSelectSitter = React.useCallback((sitter: UserApiModel) => {
        navigate(`/sitter/${sitter._id}`);
    }, [navigate]);

    return (
        <SittersMap
            sitters={sitters}
            loading={loading}
            onSelectSitter={onSelectSitter}
        />
    );
}
