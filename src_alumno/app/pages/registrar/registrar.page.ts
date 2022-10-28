import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    apellidos:'',
    email:'',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
