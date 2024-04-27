import type { SitterFilterFormData } from '@/entities/sitter/forms/sitter-filter-form/types';

export interface SitterFilterProps {
    onSubmit: (data: SitterFilterFormData) => void;
}
