import React from 'react';

import { UserApiModel } from '@/entities/user/types.ts';
import { GoogleMap, MarkerData } from '@/shared/geo/ui/google-map';

export interface SittersMapProps {
    loading: boolean;
    sitters: UserApiModel[];
    onSelectSitter: (data: UserApiModel) => void;
}

type UserMarker = MarkerData<UserApiModel>;

const center = { lat: 40.7128, lng: -74.0060 };

export const SittersMap = ({ onSelectSitter, sitters }: SittersMapProps) => {
    const markers = React.useMemo(() => {
        return sitters.reduce<UserMarker[]>((result, user) => {
            if (!user.coordinates) {
                return result;
            }

            result.push({
                center: {
                    lng: user.coordinates[0],
                    lat: user.coordinates[1],
                },
                data: user,
                id: user._id
            });

            return result;
        }, []);
    }, [sitters]);

    return (
        <GoogleMap
            center={center}
            markers={markers}
            markerRadius={10}
            height='calc(100vh - 116px)'
            onMarkerClick={onSelectSitter}
        />
    );
}
