import Stack from '@mui/material/Stack';
import { TariffBoxProps } from './types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ContentCard } from '@/shared/ui/content-card';
import { useTariffFormModal } from '@/entities/tariff/modals/tariff-form/use-tariff-form-modal';

export const TariffBox = ({ value, onAdd }: TariffBoxProps) => {
    const openModal = useTariffFormModal();

    const onAddTariff = async () => {
        const tariff = await openModal();

        if (tariff) {
            onAdd?.(tariff);
        }
    };

    return (
        <ContentCard
            title="Стоимость услуг"
            titleAdornment={<Typography variant="caption">за сутки</Typography>}
        >
            <Stack gap={0.5}>
                {value.map((tariff, index) => (
                    <Stack
                        key={index}
                        gap={0.5}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="body1">{tariff.category.name}</Typography>

                        <Typography variant="subtitle2">
                            {tariff.pricePerDay} EUR
                        </Typography>
                    </Stack>
                ))}

                {onAdd && (
                    <Button
                        onClick={() => onAddTariff()}
                        size="small"
                        variant="contained"
                        sx={{
                            mt: 0.5,
                        }}
                    >
                        Добавить тариф
                    </Button>
                )}
            </Stack>
        </ContentCard>
    );
};
