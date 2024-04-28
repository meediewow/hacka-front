import React, { useCallback, useState, useMemo } from 'react';
import axios from 'axios';
import { UNSAFE_GEO_TOKEN } from '@/shared/geo/constants.ts';
import {
    PlaceType,
    GoogleGeoData,
    AutocompleteGeoOption,
} from '@/shared/geo/ui/google-autocomplete/types.ts';
import { debounce } from '@mui/material/utils';
import { expandOption, toAutocompleteOption } from '@/shared/geo/ui/google-autocomplete/utils.ts';
import { useScriptLoader } from '@/shared/geo/ui/google-autocomplete/hooks/use-script-loader.ts';

export const autocompleteService = { current: null };

export interface UseGeoAutocompleteProps {
    value: AutocompleteGeoOption | null;
    onChange: (data: AutocompleteGeoOption | null) => void;
}

export const useDecodedGeoFetcher = ({ onChange }: UseGeoAutocompleteProps) => {
    const [loading, setLoading] = useState(false);

    const fetchExtendedData = React.useCallback(async (option: AutocompleteGeoOption) => {
        try {
            setLoading(true);

            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${option.place_id}&key=${UNSAFE_GEO_TOKEN}`);
            const data: GoogleGeoData = response.data?.results?.[0];

            if (data) {
                onChange(expandOption(option, data));
            }
        } finally {
            setLoading(false);
        }
    }, [onChange]);

    return { loading, fetchExtendedData };
}

export const useDataLoader = () => {
    const [loading, setLoading] = useState(false);

    const fetchGoogleData = useMemo(
        () =>
            debounce(
                (
                    request: { input: string },
                    callback: (results?: readonly PlaceType[]) => void,
                ) => {
                    setLoading(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (autocompleteService.current as any).getPlacePredictions(
                        request,
                        (results?: readonly PlaceType[]) => {
                            setLoading(false);
                            callback(results);
                        },
                    );
                },
                400,
            ),
        [],
    );

    return { fetchGoogleData, loading };
}

export const useGeoAutocomplete = (props: UseGeoAutocompleteProps) => {
    const [options, setOptions] = React.useState<readonly AutocompleteGeoOption[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    const { loading: googleLoading, fetchGoogleData } = useDataLoader();
    const { loading: encodedLoading, fetchExtendedData } = useDecodedGeoFetcher(props);

    useScriptLoader();

    React.useEffect(() => {
        let active = true;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                window as any
            ).google.maps.places.AutocompleteService();
        }

        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(props.value ? [props.value] : []);
            return undefined;
        }

        fetchGoogleData({ input: inputValue }, (results?: readonly PlaceType[]) => {
            if (active) {
                let newOptions: readonly AutocompleteGeoOption[] = [];

                if (props.value) {
                    newOptions = [props.value];
                }

                if (results) {
                    const resultOptions = results.map(toAutocompleteOption);
                    newOptions = [...newOptions, ...resultOptions];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [props.value, inputValue, fetchGoogleData]);

    const onChange = useCallback((newValue: AutocompleteGeoOption | null) => {
        if (newValue) {
            setOptions([newValue, ...options]);
            void fetchExtendedData(newValue);
        }
    }, [fetchExtendedData, options])

    return {
        options,
        onChange,
        inputValue,
        setInputValue,
        loading: googleLoading || encodedLoading
    };
}
