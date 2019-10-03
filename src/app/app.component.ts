import { Component } from '@angular/core';

import { Trabajador } from './models/trabajador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trabajadorArray: Trabajador[] =[];

  selectTrabajador: Trabajador = new Trabajador();

  addOrEdit(){
    if(this.selectTrabajador.id === 0){
      this.selectTrabajador.id = this.trabajadorArray.length +1;
      this.trabajadorArray.push(this.selectTrabajador);
    }
   

    this.selectTrabajador = new Trabajador();
  }
  openForEdit(trabajador: Trabajador){
    this.selectTrabajador = trabajador;
  }
  
  delete(){
    if(confirm('Estas seguro de eliminar al trabajador?')){
      this.trabajadorArray = this.trabajadorArray.filter(x =>  x != this.selectTrabajador)
      this.selectTrabajador = new Trabajador();
    }
  }
}
