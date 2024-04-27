export interface SitterFilterFormData {
    login: string;
    password: string;
}

export interface SitterFilterFormProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
