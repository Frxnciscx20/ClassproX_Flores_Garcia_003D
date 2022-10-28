import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoAlumGuard } from './guards/ingresado-alum.guard';
import { NoIngresadoAlumGuard } from './guards/no-ingresado-alum.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-alumno',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'clases',
    loadChildren: () => import('./pages/clases/clases.module').then( m => m.ClasesPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'recu',
    loadChildren: () => import('./pages/recu/recu.module').then( m => m.RecuPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    //canActivate: [IngresadoAlumGuard]
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule),
    //canActivate: [NoIngresadoAlumGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),
    //canActivate: [NoIngresadoAlumGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
