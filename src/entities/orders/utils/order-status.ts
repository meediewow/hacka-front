import { ChipOwnProps } from '@mui/material/Chip';
import { OrderStatus } from '../enum';

const OrderStatusMap = {
    [OrderStatus.New]: 'Новый',
    [OrderStatus.Confirmed]: 'Подтвержден',
    [OrderStatus.Canceled]: 'Отменен',
    [OrderStatus.Progress]: 'В процессе',
    [OrderStatus.Completed]: 'Завершен',
};

const OrderStatusColorMap = {
    [OrderStatus.New]: 'default',
    [OrderStatus.Confirmed]: 'primary',
    [OrderStatus.Canceled]: 'error',
    [OrderStatus.Progress]: 'info',
    [OrderStatus.Completed]: 'success',
};

export const getOrderStatusMapLabel = (type: OrderStatus | null | undefined) => {
    return type ? OrderStatusMap[type] : '';
};

export const getOrderStatusSeverity = (type: OrderStatus | null | undefined) => {
    return (type ? OrderStatusColorMap[type] : undefined) as
        | ChipOwnProps['color']
        | undefined;
};

export const getOrderStatusMapOptions = () => {
    return Object.entries(OrderStatusMap).map(([id, name]) => ({
        name,
        id: Number(id),
    }));
};
