import React from 'react';
import { getUserGeo } from '../utils/get-user-geo.ts';

export const useUserPosition = () => {
    const [position, setPosition] = React.useState<google.maps.LatLngLiteral | null>();
    const [isRequest, setIsRequest] = React.useState(true);

    const getPosition = React.useCallback(async () => {
        setIsRequest(true);
        const result = await getUserGeo();
        setPosition(result);
        setIsRequest(false);
    }, []);

    React.useEffect(() => {
        void getPosition();
    }, [getPosition]);

    return { isRequest, position };
}
