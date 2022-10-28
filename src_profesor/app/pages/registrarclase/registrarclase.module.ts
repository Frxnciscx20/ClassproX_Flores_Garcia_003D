import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarclasePageRoutingModule } from './registrarclase-routing.module';

import { RegistrarclasePage } from './registrarclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarclasePageRoutingModule
  ],
  declarations: [RegistrarclasePage]
})
export class RegistrarclasePageModule {}
