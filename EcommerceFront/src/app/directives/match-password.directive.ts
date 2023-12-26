import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { CustomvalidationService } from '../Services/customvalidation.service';

@Directive({
  selector: "[appMatchPassword]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input("appMatchPassword") MatchPassword: string[] = [];

  constructor(private readonly customValidator: CustomvalidationService) {}

  validate(control: AbstractControl): ValidationErrors  | null {
    return this.customValidator.matchPassword(this.MatchPassword[0] , this.MatchPassword[1])(control);
  }
}
