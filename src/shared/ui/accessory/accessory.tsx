import React from 'react';
import { AccessorySC } from './styles';
import type { AccessoryProps } from './types';

export const Accessory: React.FC<AccessoryProps> = ({
    size = 'medium',
    color = 'default',
    sx,
}) => {
    return <AccessorySC size={size} color={color} sx={sx} />;
};
