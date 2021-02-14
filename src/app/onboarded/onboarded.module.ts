import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardedPageRoutingModule } from './onboarded-routing.module';

import { OnboardedPage } from './onboarded.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardedPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [OnboardedPage]
})
export class OnboardedPageModule {}
