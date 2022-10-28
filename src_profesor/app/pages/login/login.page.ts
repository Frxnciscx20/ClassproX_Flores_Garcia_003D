import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { FormGroup, FormControl, Validators,FormBuilder} 
from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private alertController: AlertController, 
              private navController: NavController, 
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) {
                this.formularioLogin = fb.group({ 
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                 })
               }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{ 

      for(let obj of datos){
        if(obj.correoUsuario===f.correo && obj.passUsuario===f.password){
          this.alertProfesor(obj.nomUsuario);
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('menu');
        }
      }
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo


  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

  async alertProfesor(nomUsuario:string){
    const alert = await this.alertController.create({
      message: 'Bienvenido Profesor!'+nomUsuario,
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }



}