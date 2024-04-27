import React from 'react';
import Button from '@mui/material/Button';
import { useStore } from '@/shared/lib/store/react.ts';
import { createStore } from '@/shared/lib/store/vanilla.ts';

interface State {
    count: number;
    increment: () => void;
}

const store = createStore<State>((set) => ({
    count: 0,
    increment: () => set((state) => ({ ...state, count: state.count + 1 })),
}));

export const StoreTest: React.FC = () => {
    const { count, increment } = useStore(store);

    return (
        <Button variant="outlined" onClick={() => increment()}>
            count is {count}
        </Button>
    );
};
