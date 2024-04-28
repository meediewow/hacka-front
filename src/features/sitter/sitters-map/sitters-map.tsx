import React from 'react';

import { useUserPosition } from '@/shared/geo';
import { UserApiModel } from '@/entities/user/types.ts';
import { GoogleMap, MarkerData, GoogleMapProps } from '@/shared/geo/ui/google-map';

export interface SittersMapContentProps {
    loading: boolean;
    sitters: UserApiModel[];
    center: GoogleMapProps<never>['center'];
    onSelectSitter: (data: UserApiModel) => void;
}

export type SittersMapProps = Omit<SittersMapContentProps, 'center'>;

type UserMarker = MarkerData<UserApiModel>;

const defaultCenter = { lat: 34.66126353865611, lng: 33.02071074291831 };

export const SittersMapContent = ({ onSelectSitter, sitters, center }: SittersMapContentProps) => {
    const markers = React.useMemo(() => {
        return sitters.reduce<UserMarker[]>((result, user) => {
            if (!user.coordinates) {
                return result;
            }

            result.push({
                center: {
                    lng: user.coordinates[1],
                    lat: user.coordinates[0],
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
            markerRadius={100}
            height='calc(100vh - 116px)'
            onMarkerClick={onSelectSitter}
        />
    );
}

export const SittersMap = (props: SittersMapProps) => {
    const { isRequest, position } = useUserPosition();

    const center = React.useMemo(() => {
        return position ? position : defaultCenter;
    }, [position]);

    return isRequest ? null : (
        <SittersMapContent {...props} center={center} />
    )
}
