import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string='Edgar';
  nombre2:string='edgar aDolfo HerNandez';
  PI=Math.PI;
  a=0.50;
  salario=12345;

  heroe={
    nombre:'Edgar',
    edad:27,
    direccion:{
      calle:'57 N',
      numero:'3AN80'
    }
  }
  ValorPromesa=new Promise((resolve,reject)=>{
      setTimeout(()=>resolve('llego data'),3500);
  });

  fecha= new Date();

  activar:boolean=true;
};
