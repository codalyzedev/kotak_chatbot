import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotscreenPageRoutingModule } from './botscreen-routing.module';

import { BotscreenPage } from './botscreen.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ComponentsModule } from '../components/components.module';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotscreenPageRoutingModule,
    ComponentsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [BotscreenPage]
})
export class BotscreenPageModule {}
