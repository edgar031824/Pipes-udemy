import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class Contrasena implements PipeTransform {
  transform(value:string,args:boolean): string{

    let pass=value.replace(/\w/g,'*');
    if(args){
      return value;
    }else{
      return pass;
    }
  }
}
