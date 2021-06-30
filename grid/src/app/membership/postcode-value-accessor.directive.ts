import { Directive, ElementRef, forwardRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PostcodeValueAccessor),
  multi: true
};
@Directive({
  selector: 'input[type=postcode][formControlName],input[type=postcode][formControl],input[type=postcode][ngModel]',
  host: {'(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()', '(focus)':'onFocus($event.target.value)'},
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class PostcodeValueAccessor implements ControlValueAccessor  {

  value:string;
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
    this.value='__-___';
    this.setProperty('value', this.value);
  }
  onChange = (_: any) => {};
  onTouched = (_: any) => {};
  onFocus = (value: string) => {
      const first_=value.indexOf('_');
      const firstHyphen=value.indexOf('-');
      let carretPos=first_ < firstHyphen ? first_ : firstHyphen;
      if(carretPos<0){
        first_>-1 ? first_ : carretPos = 5;
      }
      setTimeout(() => {        
        this.setCaretPosition(this._elementRef.nativeElement,carretPos);
      }, 0);

  };
  setProperty(key: string, value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  setCaretPosition(elem:any, caretPos:number) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}
getMask(value:string){
  let result='';
  const mask='__-___';
  let indexShift=0;
  for(let i=0;i < 6;i++){
    if(i==2){
      result+=mask[i];
      indexShift--;
    }else{
      if(value.length>i+indexShift){
        result+=value[i+indexShift];
      }else{
        result+=mask[i];
      }
    }
  }
  return result;
}
  writeValue(value: string): void {
    const normalizedValue = value == null || value =='' ? '__-___' : value;
    this.setProperty('value', normalizedValue);
  }
  registerOnChange(fn: (_: string) => void): void  {
    this.onChange = (value) => {
      value=value.replaceAll('_','');
      value=value.replaceAll('-','');
      let carretPos=value.length;
      value = this.getMask(value);
      if(carretPos>=2){
        carretPos++;
      }
      this.setProperty('value', value);
      setTimeout(() => {        
        this.setCaretPosition(this._elementRef.nativeElement,carretPos);
      }, 0);
    };
  }
  registerOnTouched(fn: (_: string|null) => void): void {
    this.onTouched = () => {  };
  }
}
