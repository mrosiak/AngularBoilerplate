import { Pipe, PipeTransform } from '@angular/core';
import { Logger } from "./logger";
@Pipe({
  name: 'sillyText'
})
export class SillyTextPipe implements PipeTransform {

  @Logger.log()
  transform(value: string): string {
    var i:number;
    var result='';
    for(i=0; i<value.length; i++){
      if(i%2==0){
        result+=value[i].toLocaleLowerCase();
      }else{
        result+=value[i].toLocaleUpperCase();
      }
    }
    return result;
  }
}
