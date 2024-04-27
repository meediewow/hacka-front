import { ModalState } from '@/shared/lib/modal';
import { PetForm, PetFormData } from '../../forms/pet-form';
import { PanelBase } from '@/shared/lib/modal/panels/panel-base';
import { Form, useFields } from '@/shared/lib/form';
import { getFields } from '../../forms/pet-form/fields';
import noop from 'lodash/noop';
import Box from '@mui/material/Box';

interface ModalComponentProps {
    state: ModalState<PetFormData | undefined>;
}

export const PetFormModal: React.FC<ModalComponentProps> = ({ state }) => {
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
                    <PetForm fields={fields} />
                </Box>
            </PanelBase>
        </Form>
    );
};
