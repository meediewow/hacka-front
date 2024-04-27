import { useModal } from '@/shared/lib/modal';
import { TariffFormModal } from './tariff-form-modal';

export const useTariffFormModal = () => {
    const { open } = useModal(TariffFormModal);

    return () =>
        open({
            modalProps: { fullWidth: true, maxWidth: 'sm' },
        });
};
