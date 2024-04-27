import { ModalState } from '@/shared/lib/modal';
import { PanelBase } from '@/shared/lib/modal/panels/panel-base';
import { Form, useFields } from '@/shared/lib/form';
import noop from 'lodash/noop';
import Box from '@mui/material/Box';
import { TariffForm, TariffFormData } from '../../forms/tariff-form';
import { getFields } from '../../forms/tariff-form/fields';

interface ModalComponentProps {
    state: ModalState<TariffFormData | undefined>;
}

export const TariffFormModal: React.FC<ModalComponentProps> = ({ state }) => {
    const { fields } = useFields(getFields);

    const onDisagree = () => {
        state.close();
    };

    const onClose = () => {
        state.close();
    };

    return (
        <Form fields={fields} onSubmit={(pet) => state.close(pet)}>
            <PanelBase
                title="Добавить моего питомца"
                onAgree={noop}
                onDisagree={onDisagree}
                onClose={onClose}
            >
                <Box sx={{ mt: 0.5 }}>
                    <TariffForm fields={fields} />
                </Box>
            </PanelBase>
        </Form>
    );
};
