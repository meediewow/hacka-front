export interface LoginFormData {
    login: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
}
