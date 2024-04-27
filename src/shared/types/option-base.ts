export type OptionValue = string | number;

export interface OptionBase<TOptionValue extends OptionValue = string> {
    id: TOptionValue;
    name: string;
}
