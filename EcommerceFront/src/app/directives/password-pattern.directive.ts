import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomvalidationService } from '../Services/customvalidation.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true,
    },
  ],
})
export class PasswordPatternDirective implements Validator{

  constructor(private readonly customValidator: CustomvalidationService) {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }

}
