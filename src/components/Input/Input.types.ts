export interface InputType {
  error?: string | undefined;
  touched?: boolean | undefined;
  value: string;

  name: string;
  placeholder?: string;
}
