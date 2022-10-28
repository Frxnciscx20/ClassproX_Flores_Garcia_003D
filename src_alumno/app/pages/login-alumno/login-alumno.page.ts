import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroalumnoService, Alumno } from 'src/app/service/registro-alumno.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  formularioLoginAlumno : FormGroup;

  constructor(
    private alertController: AlertController,
    private navController: NavController,
    private registroAlumno: RegistroalumnoService,
    private fb: FormBuilder) {
      this.formularioLoginAlumno = this.fb.group({
        'correo': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
      }) 

  }

  ngOnInit() {
  }

  async IngresarAlumno(){
    var f = this.formularioLoginAlumno.value;
    var a = 0;
    this.registroAlumno.getAlumnos().then(datos=>{

      for(let obj of datos){
        if(obj.correoAlumno===f.correo && obj.passAlumno===f.password){
          this.alertAlumno(obj.nomAlumno);
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('menu');
        }
      }
      if (a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: '!Los datos ingresado no son correctos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

  async alertAlumno(nomAlumno:string){
    const alert = await this.alertController.create({
      message: 'Bienvenido a ClassXpro '+nomAlumno,
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
