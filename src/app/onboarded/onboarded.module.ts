import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardedPageRoutingModule } from './onboarded-routing.module';

import { OnboardedPage } from './onboarded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardedPageRoutingModule
  ],
  declarations: [OnboardedPage]
})
export class OnboardedPageModule {}
