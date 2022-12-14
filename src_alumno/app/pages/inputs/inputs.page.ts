import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostarMenu(){
    this.menuController.open('first');
  }

  usuario={
    nombre:'',
    email:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }
}
