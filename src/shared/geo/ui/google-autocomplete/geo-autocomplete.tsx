import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import parse from 'autosuggest-highlight/parse';
import Typography from '@mui/material/Typography';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {
    useGeoAutocomplete,
    UseGeoAutocompleteProps,
} from './hooks/use-geo-autocomplete';
import { AutocompleteGeoOption } from '@/shared/geo';

export type UseGeoAutocompletePropsProps = UseGeoAutocompleteProps &
    Pick<
        AutocompleteProps<AutocompleteGeoOption, never, never, never>,
        'sx' | 'fullWidth'
    > & {
        label?: React.ReactNode;
        error?: boolean;
        helperText?: React.ReactNode;
        required?: boolean;
    };

export const GeoAutocomplete = ({
    value,
    onChange: onChangeOuter,
    label,
    error,
    helperText,
    required,
    ...autocompleteProps
}: UseGeoAutocompletePropsProps) => {
    const { options, loading, onChange, setInputValue } = useGeoAutocomplete({
        value,
        onChange: onChangeOuter,
    });

    return (
        <Autocomplete
            {...autocompleteProps}
            loading={loading}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.name
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={(_: unknown, value) => {
                if (!value) {
                    return onChangeOuter(null);
                }
                onChange(value);
            }}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    fullWidth
                    required={required}
                    error={error}
                    helperText={helperText}
                />
            )}
            renderOption={(props, option) => {
                const matches = option.main_text_matched_substrings || [];

                const parts = parse(
                    option.main_text ?? '',
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    matches.map((match: any) => [
                        match.offset,
                        match.offset + match.length,
                    ])
                );

                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                <LocationOnIcon sx={{ color: 'text.secondary' }} />
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    width: 'calc(100% - 44px)',
                                    wordWrap: 'break-word',
                                }}
                            >
                                {parts.map((part, index) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{
                                            fontWeight: part.highlight
                                                ? 'bold'
                                                : 'regular',
                                        }}
                                    >
                                        {part.text}
                                    </Box>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    {option.secondary_text ?? ''}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
};
