import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateFromControl = new Date(control.value);
    const todayDate = new Date();

    return dateFromControl > todayDate ? { futureDate: true } : null;
  };
}
