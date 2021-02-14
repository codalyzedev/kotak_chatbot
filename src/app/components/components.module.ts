import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardedComponent } from './onboarded/onboarded.component';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [OnboardedComponent],
  exports: [OnboardedComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class ComponentsModule { }
