import { AutocompleteGeoOption, GoogleGeoData, PlaceType } from './types.ts';

export const toAutocompleteOption = (raw: PlaceType): AutocompleteGeoOption => {
    return {
        name: raw.description,
        place_id: raw.place_id,

        lat: 0,
        lng: 0,

        main_text: raw.structured_formatting.main_text,
        secondary_text: raw.structured_formatting.secondary_text,
        main_text_matched_substrings: raw.structured_formatting.main_text_matched_substrings || []
    }
}

export const expandOption = (option: AutocompleteGeoOption, data: GoogleGeoData) => ({
    ...option,
    ...data.geometry.location,
});
