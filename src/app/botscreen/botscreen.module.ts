import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotscreenPageRoutingModule } from './botscreen-routing.module';

import { BotscreenPage } from './botscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotscreenPageRoutingModule
  ],
  declarations: [BotscreenPage]
})
export class BotscreenPageModule {}
