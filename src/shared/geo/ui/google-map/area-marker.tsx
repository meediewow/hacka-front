import React from 'react';
import { Circle, CircleProps } from '@react-google-maps/api';

const MARKER_COLOR = '#078DEE';

export interface AreaMarker<T> {
    data?: T;
    radius?: number;
    onClick: (data?: T) => void;
    map: google.maps.Map | null;
    center: CircleProps['center'];
}

export const AreaMarker = <T,>({ center, radius, map, onClick, data }: AreaMarker<T>) => {
    const clickHandler = React.useCallback(() => {
        onClick(data);
    }, [data, onClick]);

    return (<Circle
        center={center}
        onClick={clickHandler}
        radius={radius ?? 1000}
        options={{
            map: map,
            center: center,
            radius: 1000,
            strokeColor: MARKER_COLOR,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: MARKER_COLOR,
            fillOpacity: 0.35,
        }}
    />)
}
