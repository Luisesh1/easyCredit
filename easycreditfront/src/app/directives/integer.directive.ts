import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

function action(c: AbstractControl){
  if(c.value == null ) return null;
  if(!Number.isInteger(c.value)){
    return {integer:true}
  }
  return null;
}


@Directive({
  selector: '[appInteger]',
  providers:[{
    provide: NG_VALIDATORS,
    multi: true,
    useValue : action
  }]
})
export class IntegerDirective {

  constructor() { }

}
