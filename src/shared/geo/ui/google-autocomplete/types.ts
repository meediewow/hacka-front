interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}

interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: MainTextMatchedSubstrings[];
}

export interface AutocompleteGeoOption {
    name: string;
    place_id: string | null;

    lat: number;
    lng: number;

    main_text?: string;
    secondary_text?: string;
    main_text_matched_substrings?: MainTextMatchedSubstrings[];
}

export interface PlaceType {
    place_id: string;
    description: string;
    structured_formatting: StructuredFormatting;
}

export interface GoogleGeoData {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
}
