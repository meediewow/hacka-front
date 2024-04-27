import { useModal } from '@/shared/lib/modal';
import { PetFormModal } from './pet-form-modal';

export const usePetFormModal = () => {
    const { open } = useModal(PetFormModal);

    return () =>
        open({
            modalProps: { fullWidth: true, maxWidth: 'sm' },
        });
};
