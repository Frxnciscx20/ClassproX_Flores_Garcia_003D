import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  usuario={
    correo:'',
    rut:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
