import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Alumno{
  nomAlumno: string;
  correoAlumno: string;
  passAlumno: string;
  repassAlumno: string;
}

const USERS_KEY = 'my-alumnos';

@Injectable({
  providedIn: 'root'
})

export class RegistroalumnoService {

  private _storage;

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
   }

  async addDatos(dato: Alumno):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos:Alumno[])=>{
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }

  async getAlumnos(): Promise<Alumno[]>{
    return this.storage.get(USERS_KEY);
  }
}
