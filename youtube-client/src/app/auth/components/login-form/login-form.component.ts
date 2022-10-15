import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submitted = new EventEmitter();

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.submitted.emit(this.loginForm.value);
  }

  getPasswordErrorMessage(): string {
    if (this.loginForm.get('password')?.hasError('minlength')) {
      return 'Password must be equal or longer than 5';
    }

    return '';
  }
}
