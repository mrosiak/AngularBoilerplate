import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[postcodeAsyncValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PostcodeAsyncValidator, multi:true}]
})
export class PostcodeAsyncValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors|null> {
    return of(this.checkValue(control));
  }
  checkValue(control: AbstractControl){
    if(control.value=='__-___' || control.value==''){
      return of({'custom': true});
    }else{
      control.markAsUntouched();
      control.clearAsyncValidators();
      return of(null);
    }
  }
}
export function PostcodeAsyncValidatorFn(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if(control.value=='__-___' || control.value==''){
      return of({'custom': true});
    }else{
      return of(null);
    }
  }  
}
export class ZipcodeValidator {
  static createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return of({'custom': control.value =='__-___' || control.value==''});
    };
  }
}
