import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  EmailFieldErrors,
  LoginFormFields,
  LoginFormValues,
  PasswordFieldErrors,
} from '../../models/auth.model';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<LoginFormValues>();

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordStrengthValidator()]],
  });

  hasEmailError: boolean;

  hasPasswordError: boolean;

  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.valid) {
        this.hasEmailError = false;
        this.hasPasswordError = false;
      }

      const emailControl = this.loginForm.get(LoginFormFields.EMAIL);
      const passwordControl = this.loginForm.get(LoginFormFields.PASSWORD);

      this.hasEmailError = this.checkHasError(emailControl);
      this.hasPasswordError = this.checkHasError(passwordControl);
    });
  }

  checkHasError(control: AbstractControl): boolean {
    return control.errors && Object.keys(control.errors).length !== 0;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.submitted.emit(this.loginForm.value as LoginFormValues);
  }

  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.get(LoginFormFields.EMAIL);

    if (emailControl.hasError(EmailFieldErrors.REQUIRED)) return 'Please enter a login email';
    if (emailControl.hasError(EmailFieldErrors.EMAIL)) return 'The login email is invalid';

    return '';
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.loginForm.get(LoginFormFields.PASSWORD);
    const errorMessage = "Your password isn't strong enough: it must";

    switch (true) {
      case passwordControl.hasError(PasswordFieldErrors.REQUIRED):
        return 'Please enter a password';
      case passwordControl.hasError(PasswordFieldErrors.ENOUGH_CHARS):
        return `${errorMessage} be at least 8 characters`;
      case passwordControl.hasError(PasswordFieldErrors.LOWERCASE) ||
        passwordControl.hasError(PasswordFieldErrors.UPPERCASE):
        return `${errorMessage} contain 1 lowercase and 1 uppercase letter`;
      case passwordControl.hasError(PasswordFieldErrors.NUMERIC):
        return `${errorMessage} contain numbers`;
      case passwordControl.hasError(PasswordFieldErrors.SPECIALS):
        return `${errorMessage} contain at least 1 special character, e.g., ! @ # ? ]`;
      default:
        return '';
    }
  }
}
