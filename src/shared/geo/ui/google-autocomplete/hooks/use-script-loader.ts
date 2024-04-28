import React from 'react';

import { UNSAFE_GEO_TOKEN } from '../../../constants';
import { loadScript } from '../../../utils/load-script';

export const useScriptLoader = () => {
    const loaded = React.useRef(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined' && !loaded.current) {
            if (!document.querySelector('#google-maps')) {
                loadScript(
                    `https://maps.googleapis.com/maps/api/js?key=${UNSAFE_GEO_TOKEN}&libraries=places`,
                    document.querySelector('head'),
                    'google-maps'
                );
            }

            loaded.current = true;
        }
    }, []);
};
