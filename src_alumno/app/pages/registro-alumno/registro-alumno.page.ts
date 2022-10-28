import { Component, OnInit } from '@angular/core';
import { AlertController, mdTransitionAnimation } from '@ionic/angular';
import { RegistroalumnoService, Alumno } from 'src/app/service/registro-alumno.service';
import { ToastController } from '@ionic/angular';

import{ FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  formularioRegistro: FormGroup; 
  newAlumno: Alumno = <Alumno>{};

  constructor(private registroService: RegistroalumnoService,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb: FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.required),
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'confirmaPass': new FormControl("", Validators.required)
                });
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value; 
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else{
      this.newAlumno.nomAlumno = form.nombre;
      this.newAlumno.correoAlumno = form.correo;
      this.newAlumno.passAlumno = form.password;
      this.newAlumno.repassAlumno = form.confirmaPass;
      this.registroService.addDatos(this.newAlumno).then(dato=>{
        this.newAlumno = <Alumno>{};
        this.showToast('Alumno Ingresado');
      })
      this.formularioRegistro.reset();
    }
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    await toast.present();

  }
}
