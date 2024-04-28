import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import { AuthContext, useUser } from '@/features/auth';
import { UserProfile } from '@/features/user/user-profile';
import { TariffEditedBox } from '@/features/tariff/tariff-edited-box/tariff-edited-box';
import { PetEditedBox } from '@/features/pet/pet-edited-box/pet-edited-box';
import { OrderList } from '@/features/orders/order-list/order-list';
import Button from '@mui/material/Button';

export const ProfilePage: React.FC = () => {
    const user = useUser();

    const { setToken } = useContext(AuthContext);

    if (!user) {
        return null;
    }

    const logOut = () => {
        setToken('');

        window.location.href = '/';
    };

    return (
        <Stack width="100%" p={1} justifyContent="center" gap={0.5}>
            <UserProfile user={user} />

            <Button variant="outlined" color="primary" onClick={() => logOut()}>
                Выйти
            </Button>

            {user.isSitter && <TariffEditedBox initialTariffs={user.tariff ?? []} />}

            {<PetEditedBox initialPets={user.pets ?? []} />}

            {user.isSitter && <OrderList role="sitter" />}

            <OrderList role="client" />
        </Stack>
    );
};
