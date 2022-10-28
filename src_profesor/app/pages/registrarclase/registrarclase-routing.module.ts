import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarclasePage } from './registrarclase.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarclasePageRoutingModule {}
