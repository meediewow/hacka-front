export interface RateFormData {
    comment?: string;
    rate: number;
}

export interface RateFormProps {
    onSubmit: (data: RateFormData) => void;
}
