import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, arg1:boolean): string {
  value=value.toLowerCase();
  let arFullName=value.match(/\w+/g);
  let arFinalName:any=[];
  let sbCapitalizeWord='';

if(arg1){
  for (let i = 0; i < arFullName.length; i++) {
    sbCapitalizeWord= arFullName[i].replace(arFullName[i][0],arFullName[i][0].toUpperCase());
    arFinalName.push(sbCapitalizeWord);
  }
  arFinalName=arFinalName.join(' ');
}else{
  arFinalName=arFullName.join(' ');
  arFinalName=arFinalName.replace(arFinalName[0],arFinalName[0].toUpperCase())
}
    return arFinalName
  }
}
