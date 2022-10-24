export enum LoginFormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export enum EmailFieldErrors {
  REQUIRED = 'required',
  EMAIL = 'email',
}

export enum PasswordFieldErrors {
  REQUIRED = 'required',
  ENOUGH_CHARS = 'hasEnoughChars',
  UPPERCASE = 'hasUpperCase',
  LOWERCASE = 'hasLowerCase',
  NUMERIC = 'hasNumeric',
  SPECIALS = 'hasSpecials',
}

export type PasswordStrengthErrorsKey =
  | PasswordFieldErrors.ENOUGH_CHARS
  | PasswordFieldErrors.LOWERCASE
  | PasswordFieldErrors.UPPERCASE
  | PasswordFieldErrors.NUMERIC
  | PasswordFieldErrors.SPECIALS;

export interface PasswordStrengthErrors {
  hasEnoughChars?: boolean;
  hasUpperCase?: boolean;
  hasLowerCase?: boolean;
  hasNumeric?: boolean;
  hasSpecials?: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  token: string;
}
