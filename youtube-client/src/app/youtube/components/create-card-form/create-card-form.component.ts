import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { URLPattern } from '../../models/url-pattern.constant';
import { futureDateValidator } from '../../validators/future-date.validator';
import { CreateCardFormValues } from '../../models/custom-card.model';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent {
  @Output() submitted = new EventEmitter<CreateCardFormValues>();

  createCardForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(255)]],
    coverLink: ['', [Validators.required, Validators.pattern(URLPattern)]],
    videoLink: ['', [Validators.required, Validators.pattern(URLPattern)]],
    creationDate: ['', [Validators.required, futureDateValidator()]],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this.createCardForm.invalid) return;

    this.submitted.emit(this.createCardForm.value as CreateCardFormValues);
  }
}
