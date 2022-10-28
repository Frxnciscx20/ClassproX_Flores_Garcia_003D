import { Component } from '@angular/core';
interface AppPage{
  title: string;
  redirecTo: string;
  icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  appPages : AppPage[] = [
    
    { title: 'Menu', redirecTo: '/menu', icon: 'home' },
    { title: 'Lista de Asistencia', redirecTo: '/home', icon: 'people' },
    { title: 'Noticias', redirecTo: '/noticias', icon: 'newspaper' },

    

    
    
    
    { title: 'clases', redirecTo:'/clases', icon:'finger-print'},
    { title: 'Cerrar sesion', redirecTo: '/login', icon: 'log-out' }
    
    
    
    
    


  ];
  

}
