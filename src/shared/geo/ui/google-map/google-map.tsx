import React from 'react';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import {
    useJsApiLoader,
    GoogleMap as GoogleMapOrigin
} from '@react-google-maps/api';

import { UNSAFE_GEO_TOKEN } from '../../constants';

import { AreaMarker } from './area-marker.tsx';

interface MapPlaceholderProps {
    height: string | number;
}

const MapPlaceholder = ({ height }: MapPlaceholderProps) => {
    return (
        <Stack height={height} alignItems="center" justifyContent="center">
            <CircularProgress />
        </Stack>
    )
}

export interface MarkerData<T> {
    data: T;
    id: string | number;
    center: google.maps.LatLngLiteral;
}

export interface GoogleMapProps<T> {
    markerRadius?: number;
    height: string | number;
    markers?: Array<MarkerData<T>>;
    center: google.maps.LatLngLiteral;
    onMarkerClick?: (data: T) => void;
}

export const GoogleMap = <T,>({ markerRadius, markers, height, center, onMarkerClick }: GoogleMapProps<T>) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        libraries: ['visualization'],
        googleMapsApiKey: UNSAFE_GEO_TOKEN
    });

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onLoad = React.useCallback(function callback(data: google.maps.Map) {
        setMap(data)
    }, [])

    const onUnmount = React.useCallback(function callback() {
        setMap(null)
    }, []);

    const markerClickHandler = React.useCallback((data: T) => {
        onMarkerClick?.(data);
    }, [onMarkerClick]);

    const markerComponents = React.useMemo(() => {
        if (!markers || !markers.length || !map) {
            return null;
        }

        return markers.map(marker => (
            <AreaMarker
                map={map}
                key={marker.id}
                data={marker.data}
                radius={markerRadius}
                center={marker.center}
                onClick={markerClickHandler}
            />
        ));
    }, [map, markerClickHandler, markerRadius, markers]);

    const containerStyle = React.useMemo(() => ({
        height,
        width: '100%'
    }), [height]);

    return isLoaded ? (
        <GoogleMapOrigin
            zoom={15}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            mapContainerStyle={containerStyle}
            options={{
                clickableIcons: false,
                mapTypeControl: false,
                streetViewControl: false,
            }}
        >
            {markerComponents}
        </GoogleMapOrigin>
    ) : <MapPlaceholder height={containerStyle.height} />
}
